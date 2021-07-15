<template>
    <div class="__VSTEditor_main_container" :class="theme">
        <div class="toolbar">
            <div class="toolbar-inner-cotnainer">
                <tool-group v-for="(group, key) in tools" :group-name="group.name" :key="key">
                    <tool :theme="theme" v-for="(tool, index) in group.tools" :name="tool.name" :index="index" :group-index="key" :title="tool.title" :key="index" @toolUsed="applyToolFunctionality">
                        {{tool.displayContent}}
                    </tool>
                </tool-group>
            </div>
        </div>
        <div class="content __VSTEditor_content" contenteditable="true" @click="getTargetElement" @blur="saveContent" ref="editorContentDOMElement" @keydown="handlePressedKey" >
            <slot></slot>
        </div>
        <div class="additional-contianer">
            <input type="hidden" v-model="editorCodeContent">
        </div>
        <image-setting :is-visible='settingWindowsVisibility.imageSettings' :image="targetElement" @settingsWindowsClosed="closeSettingWindow('imageSettings')"></image-setting>
    </div>
</template>

<script>
import {onMounted, ref, inject} from 'vue'

import VSTEditTool from '@/components/VSTEditTool.vue'
import VSTEditToolsGroup from '@/components/VSTEditToolsGroup.vue'
import VSTEditImageSettings from '@/components/VSTEditImageSettings.vue'

import defaultTools from '@/defaultTools'

export default {

    components:{
        'tool': VSTEditTool,
        'tool-group': VSTEditToolsGroup,
        'image-setting': VSTEditImageSettings
    },

    props: {
        theme: {
            type: String,
            default: 'dark-theme'
        }
    },

    setup(props, context) {
        console.warn(props, context)

        let editorCodeContent = ref("")
        let targetElement = ref(null)

        const editorContentDOMElement = ref(null) // references to contenteditable div
        const tools = [...defaultTools]

        let editorSettings = inject('customSettings') != undefined ? inject('customSettings').editorSettings : undefined

        const settingWindowsVisibility = ref({
            imageSettings: true
        })

        onMounted(()=>{
            targetElement.value = editorContentDOMElement.value
            saveContent()
        })

        // detect last element was clicked
        function getTargetElement(event) {
            targetElement.value = event.target
            if(targetElement.value.tagName == "IMG") settingWindowsVisibility.value.imageSettings = true
        }

        // apply tool
        function applyToolFunctionality(data) {
            tools[data.groupIndex].tools[data.index].action({
                targetElement: targetElement.value,
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

        // save content of editor to reactive variable which is connected with hidden input
        function saveContent() {
            // Replace < and > chars in inputed text
            editorContentDOMElement.value.innerText.replaceAll('<', '&lt;')
            editorContentDOMElement.value.innerText.replaceAll('>', '&gt;')

            // save user content
            editorCodeContent.value = editorContentDOMElement.value.innerHTML
        }

        function handlePressedKey(e) {
            if(e.keyCode == 13) { 
                document.execCommand('defaultParagraphSeparator', false, 'p')
            }
        }

        function closeSettingWindow(key){
            settingWindowsVisibility.value[key] = false
        }

        return {
            getTargetElement: getTargetElement,
            targetElement: targetElement,
            applyToolFunctionality: applyToolFunctionality,
            saveContent: saveContent,
            handlePressedKey: handlePressedKey,
            closeSettingWindow: closeSettingWindow,

            tools: tools,
            editorContentDOMElement: editorContentDOMElement,
            editorCodeContent: editorCodeContent,
            settingWindowsVisibility: settingWindowsVisibility
        }

    },
}
</script>

<style lang="sass">
.__VSTEditor_main_container
    width: 100%
    height: 100%
    display: flex
    flex-direction: column
    position: relative
    
    & .toolbar, & .content
        width: 100%
        box-sizing: border-box
        padding: 10px  
        border-radius: 6px

    & .content
        width: 100%
        height: 100%
        margin-top: 10px
        overflow-y: auto
        outline: none

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
            border: 1px solid #1F252E
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
            
    & .additional-contianer
        display: none

.__VSTEditor_input
    margin-top: 6px
    outline: none
.__VSTEditor_button
    padding: 8px

.dark-theme
    & .__VSTEditor_input
        background: none
        border: 0
        border-bottom: 1px solid #fff
        color: #fff
        box-sizing: border-box
        padding: 2px
    & .__VSTEditor_button
        background: #242931
        transition: .4s
        border: 0
        outline: none
        color: #fff
        cursor: pointer
        border: 1px solid #30363E
        border-radius: 6px
        &:last-of-type
            margin-left: 10px
        &:hover
            background: #9F193A

.vste-fade-enter-from, .vste-fade-leave-to
  opacity: 0
.vste-fade-enter-active, .vste-fade-leave-active
  transition: opacity .3s ease-in
        
</style>