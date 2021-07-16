<template>
    <transition name="vste-fade">
        <settings :is-visible="isVisible" :theme="theme">
            <form action="">
                <form-container>
                    <div>
                        <label>Width: </label><br>
                        <input class="__VSTEditor_input" type="text" placeholder="Enter image width" v-model="attributes.width">
                        <br><br><br>
                        <label>Height: </label><br>
                        <input class="__VSTEditor_input" type="text" placeholder="Enter image height" v-model="attributes.height">
                    </div>
                    <div>
                        <label>Alt: </label><br>
                        <input class="__VSTEditor_input" type="text" placeholder="Enter alt" v-model="attributes.alt">
                        <br><br><br>
                        <button class="__VSTEditor_button" @click="saveImageData" type="reset">
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
        image: {
            type: Object,
            default(){
                return {}
            }
        }
    },
    
    setup(props, context) {
        const attributes = ref({
            width: '',
            height: '',
            alt: '',
        })

        function saveImageData() {
            for(let attr in attributes.value)
                props.image.setAttribute(attr, attributes.value[attr])
        }

        function closeWindow() {
            context.emit("settingsWindowsClosed")
        }

        return {
            saveImageData: saveImageData,
            close: closeWindow,
            attributes: attributes
        }
    },
}
</script>