<template>
    <transition name="vste-fade">
        <settings :is-visible="isVisible" :theme="theme">
            <form>
                <form-container>
                    <div>
                        <label>Href: </label><br>
                        <input class="__VSTEditor_input" type="text" placeholder="Enter link href" v-model="attributes.href">
                        <br><br><br>
                        <label>Target: </label><br>
                        <input class="__VSTEditor_input" type="text" placeholder="Enter link target" v-model="attributes.target">
                    </div>
                    <div>
                        <label>Download: </label><br>
                        <input class="__VSTEditor_input" type="text" placeholder="Enter download attribute" v-model="attributes.download">
                        <br><br><br>
                        <label>Referrerpolicy: </label><br>
                        <input class="__VSTEditor_input" type="text" placeholder="Enter referrerpolicy attribute" v-model="attributes.referrerpolicy">
                        <br><br><br>
                        <button class="__VSTEditor_button" @click="saveLinkData" type="reset">
                            OK
                        </button>
                        <button class="__VSTEditor_button" @click="close" type="reset">
                            Close
                        </button>
                    </div>
                </form-container>
            </form>
        </settings>
    </transition>
</template>

<script>
import {ref} from 'vue'

import VSTEditSettings from '@/components/VSTEditSettings.vue'
import FormContainer from '@/components/FormContainer.vue'

export default {
    components: {
        'settings': VSTEditSettings,
        'form-container': FormContainer
    },

    props: {
        isVisible: {
            type: Boolean,
            default: false
        },
        theme: {
            type: String,
            default: 'dark-theme'
        },
        link: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    
    setup(props, context) {
        const attributes = ref({
            href: '',
            target: '',
            download: '',
            referrerpolicy: ''
        })

        function saveLinkData() { 
            for(let attr in attributes.value)
                props.link.setAttribute(attr, attributes.value[attr])
        }

        function closeWindow() {
            context.emit("settingsWindowsClosed")
        }

        return {
            saveLinkData: saveLinkData,
            close: closeWindow,
            attributes: attributes
        }
    },
}
</script>