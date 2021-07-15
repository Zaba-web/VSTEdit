<template>
    <div class="main-editor-container" :class="[theme, `border-${borderShape}`]">
        <div class="toolbar">
            <div class="toolbar-inner-cotnainer">
                <tool-group v-for="(group, key) in tools" :group-name="group.name" :key="key">
                    <tool :theme="theme" v-for="(tool, index) in group.tools" :name="tool.name" :index="index" :group-index="key" :title="tool.title" :key="index" @toolUsed="applyToolFunctionality">
                        {{tool.displayContent}}
                    </tool>
                </tool-group>
            </div>
        </div>
        <div class="content __VSTEditor_content" contenteditable="true" @click="getTargetElement" @blur="saveContent" ref="editorContentDOMElement" @keydown="handlePressedKey">
            <slot></slot>
        </div>
        <div class="additional-contianer">
            <input type="hidden" v-model="editorCodeContent">
        </div>
    </div>
</template>

<script>
import {onMounted, ref, inject} from 'vue'

import VSTEditTool from '@/components/VSTEditTool.vue'
import VSTEditToolsGroup from '@/components/VSTEditToolsGroup.vue'

import defaultTools from '@/defaultTools'

export default {

    components:{
        'tool': VSTEditTool,
        'tool-group': VSTEditToolsGroup
    },

    props: {
        theme: {
            type: String,
            default: 'dark-theme'
        },
        borderShape: {
            type: String,
            default: 'rounded'
        }
    },

    setup(props, context) {
        console.warn(props, context)

        let editorSettings

        if(inject('customSettings'))
            editorSettings = inject('customSettings').editorSettings

        let editorCodeContent = ref("")
        let targetElement = null

        const editorContentDOMElement = ref(null) // references to contenteditable div
        const tools = [...defaultTools]

        onMounted(()=>{
            targetElement = editorContentDOMElement.value
            saveContent()
        })

        // detect last element was clicked
        function getTargetElement(event){
            targetElement = event.target
        }

        // apply tool
        function applyToolFunctionality(data) {
            tools[data.groupIndex].tools[data.index].action({
                targetElement: targetElement,
                config: editorSettings
            }, appendItem, wrapSelectedText)
        }

        // insert element at the end of the selected element
        function appendItem(target, codeToAppend) {
            target.insertAdjacentHTML('beforeend', codeToAppend)
        }

        // wrapping selected text into custom html node
        function wrapSelectedText() {
            let selection = window.getSelection() 

            // reccursive function which detects if selected item is in editor container bounds
            const detectIfSelectionInEditor = (node) => {
                if(node.parentNode.classList.contains('__VSTEditor_content')) // selected text inside the editor
                    return true
                if(node.parentNode.tagName == "BODY") // selected text is outside the editor
                    return false
                else // go up in DOM Tree
                    return detectIfSelectionInEditor(node.parentNode)
            }

            if(selection.anchorOffset == 0 && selection.focusOffset == 0) return null // there is no selection on page

            let isSelectionInEditor = detectIfSelectionInEditor(selection.anchorNode)

            if(!isSelectionInEditor) return null // selected text is outside the editor

            selection = selection.getRangeAt(0) // convert selection in range object

            const selectedText = selection.extractContents() // create DocumentFragment from selected text

            // closure to get access to selectedText in user code
            return {
                selectedText: selectedText,
                selection: selection,

                append(node, content){
                    node.appendChild(content)
                    selection.insertNode(node)
                }
            }

        }

        function saveContent() {
            // Replace < and > chars in inputed text
            editorContentDOMElement.value.innerText.replaceAll('<', '&lt;')
            editorContentDOMElement.value.innerText.replaceAll('>', '&gt;')

            // save user content
            editorCodeContent.value = editorContentDOMElement.value.innerHTML
        }

        function handlePressedKey(e) {
            if(e.keyCode == 13)
                document.execCommand('formatBlock', false, 'p')
        }

        return {
            getTargetElement: getTargetElement,
            applyToolFunctionality: applyToolFunctionality,
            saveContent: saveContent,
            handlePressedKey: handlePressedKey,
            tools: tools,
            editorContentDOMElement: editorContentDOMElement,
            editorCodeContent: editorCodeContent
        }

    },
}
</script>

<style lang="sass" scoped>
.main-editor-container
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    
    & .toolbar, & .content
        width: 100%
        box-sizing: border-box
        padding: 10px  

    & .content
        height: 100%
        margin-top: 10px
        overflow: auto

    & .toolbar-inner-cotnainer
        margin-top: 10px
        display: flex
        flex-wrap: wrap
        gap: 10px

    & .toolbar
        font-family: 'Calibri'

    &.dark-theme
        & .toolbar, & .content
            background: #1A2029
            color: #fff
            border: 1px solid black
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    &.border-rounded
        & .toolbar, & .content
            border-radius: 6px
.additional-contianer
    display: none
</style>