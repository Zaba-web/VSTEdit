<template>
    <div class="__VSTEditor_main_container" :class="theme" ref="rootEditorElement">
        <div class="toolbar">
            <div class="toolbar-inner-cotnainer">
                <tool-group v-for="(group, key) in tools"
                            :group-name="group.name" 
                            :key="key"
                            :displayGroupName="displayGroupName"
                            :theme="theme"
                            >
                    <tool 
                        :theme="theme" 
                        v-for="(tool, index) in group.tools" 
                        :name="tool.name" :index="index" 
                        :group-index="key" 
                        :title="tool.title" 
                        :key="index" 
                        @toolUsed="applyToolFunctionality"
                        :content="tool.displayContent"
                    >
                    </tool>
                </tool-group>
            </div>
        </div>
        <div 
            class="content __VSTEditor_content" 
            contenteditable="true" 
            @click="getTargetElement"
            @blur="saveContent" 
            ref="editorContentDOMElement" 
            @keydown="handlePressedKey" 
        >
            <slot></slot>
        </div>
        <div class="VSTEdit_additional-contianer">
            <input type="hidden" v-model="editorCodeContent" :name="inputName">
        </div>
        <settings-trigger v-if="showSettingsTrigger" @click="openSettingsWindow"></settings-trigger>
        <image-setting 
            :is-visible='settingWindowsVisibility.imageSettings' 
            :image="targetElement" 
            :theme="theme"
            @settingsWindowsClosed="closeSettingWindow('imageSettings')"
        />
        <link-setting 
            :is-visible='settingWindowsVisibility.linkSettings' 
            :link="targetElement" 
            :theme="theme"
            @settingsWindowsClosed="closeSettingWindow('linkSettings')"
        />
    </div>
</template>

<script>
import {onMounted, ref, inject} from 'vue'

import VSTEditTool from '@/components/VSTEditTool.vue'
import VSTEditToolsGroup from '@/components/VSTEditToolsGroup.vue'
import VSTEditImageSettings from '@/components/VSTEditImageSettings.vue'
import VSTEditSettingsTrigger from '@/components/VSTEditSettingsTrigger.vue'
import VSTEditLinkSettings from '@/components/VSTEditLinkSettings.vue'

import defaultTools from '@/defaultTools'

export default {

    components:{
        'tool': VSTEditTool,
        'tool-group': VSTEditToolsGroup,
        'settings-trigger': VSTEditSettingsTrigger,
        'image-setting': VSTEditImageSettings,
        'link-setting': VSTEditLinkSettings,
    },

    props: {
        theme: {
            type: String,
            default: 'dark-theme'
        },
        inputName: {
            type: String,
            default: 'VSTEditor_input'
        },
        displayGroupName: {
            type: Boolean,
            default: true
        },
        autoSave: {
            type: Boolean,
            default: false
        },
        autoSaveTime: {
            type: Number,
            default: 30000
        },
        autoSaveIdentifier: {
            type: String,
            default: '__VSTEditor'
        }
    },

    setup(props, context) {

        let areCustomSettingsSet = inject('customSettings') != undefined
        let editorSettings, userTools
    
        if(areCustomSettingsSet) {
            editorSettings = inject('customSettings').editorSettings
            userTools = inject('customSettings').tools != undefined ? inject('customSettings').tools : []
        }

        let editorCodeContent = ref("")
        let targetElement = ref(null)
        let rootEditorElement = ref(null)

        const editorContentDOMElement = ref(null) // references to contenteditable div
        const tools = [...defaultTools, ...userTools]

        // visibility of different settings windows
        const settingWindowsVisibility = ref({
            imageSettings: false,
            linkSettings: false
        })

        // this variable describes visibility of the button that allows to open the settings window
        const showSettingsTrigger = ref(false) 

        const specialTagTriggers = {
            "IMG": () => settingWindowsVisibility.value.imageSettings = true,
            "A": () => settingWindowsVisibility.value.linkSettings = true
        }

        // if enabled autosave
        if(props.autoSave) {
            setTimeout(()=>{
                saveContent()
                // save contnet in local storage
                localStorage.setItem(props.autoSaveIdentifier, editorCodeContent.value)
            }, props.autoSaveTime)
        }

        onMounted(()=>{
            targetElement.value = editorContentDOMElement.value

            // load saved data if it is set
            if(props.autoSave && localStorage.getItem(props.autoSaveIdentifier) != null)
                editorContentDOMElement.value.innerHTML = localStorage.getItem(props.autoSaveIdentifier)

            saveContent()
        })

        // detect last element was clicked
        function getTargetElement(event) {
            targetElement.value = event.target

            // if selected element support additional settings
            showSettingsTrigger.value = specialTagTriggers[targetElement.value.tagName] ? true : false
        }

        function openSettingsWindow() {
            if(specialTagTriggers[targetElement.value.tagName]) 
                specialTagTriggers[targetElement.value.tagName]()
        }

        // apply tool
        function applyToolFunctionality(data) {
            context.emit('toolUsed', data)

            tools[data.groupIndex].tools[data.index].action({
                targetElement: targetElement.value,
                config: editorSettings,
                rootEditorElement: rootEditorElement.value
            }, appendItem, wrapSelectedText)
        }

        // insert element at the end of the selected element
        function appendItem(target, codeToAppend) {
            if(target.classList.contains('__VSTEditor_content'))
                target.insertAdjacentHTML('beforeend', codeToAppend)
            else
                target.insertAdjacentHTML('afterend', codeToAppend)
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

            if(selectedText.textContent == "") return null // if selection is empty

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
            openSettingsWindow: openSettingsWindow,

            tools: tools,
            editorContentDOMElement: editorContentDOMElement,
            editorCodeContent: editorCodeContent,
            settingWindowsVisibility: settingWindowsVisibility,
            showSettingsTrigger: showSettingsTrigger,
            rootEditorElement: rootEditorElement
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
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px

    &.light-theme
        & .toolbar, & .content
            background: #F5F5F5
            color: #181E27
            border: 1px solid #C2C2C2
            box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px
            
    & .VSTEdit_additional-contianer
        display: none

.__VSTEditor_input
    margin-top: 6px
    outline: none
.__VSTEditor_button
    padding: 8px

.__VSTEditor_input
        background: none
        border: 0
        color: #fff
        box-sizing: border-box
        padding: 2px
        width: 90%
        min-width: 120px 

.__VSTEditor_button
        transition: .4s
        border: 0
        outline: none
        cursor: pointer
        border-radius: 6px
        &:last-of-type
            margin-left: 10px

.VSTEdit_settings_trigger
    border-radius: 6px
    cursor: pointer

.VSTEdit__icon
    height: 14px

.dark-theme
    & .__VSTEditor_input
        border-bottom: 1px solid #fff

    & .__VSTEditor_button
        background: #242931
        color: #fff
        border: 1px solid #30363E
        &:hover
            background: #9F193A

    & .VSTEdit_settings_trigger
        background: #30363E

    & .VSTEdit__icon
        fill: #fff

.light-theme
    & .__VSTEditor_input
        border-bottom: 1px solid #181E27
        color: #181E27

    & .__VSTEditor_button
            background: #E7E8E9
            color: #181E27
            border: 1px solid #c2c2c2
            &:hover
                background: #93BCF9

    & .VSTEdit_settings_trigger
        background: #E7E8E9
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px

    & .VSTEdit__icon
        fill: #181E27

.__VSTEditor_fullscreen
    position: fixed
    z-index: 12000
    left: 0
    top: 0
    width: 100vw
    height: 100vh

.vste-fade-enter-from, .vste-fade-leave-to
  opacity: 0
.vste-fade-enter-active, .vste-fade-leave-active
  transition: opacity .3s ease-out
        
</style>