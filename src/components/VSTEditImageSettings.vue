<template>
    <transition name="vste-fade">
        <settings :is-visible="isVisible" :theme="theme">
            <form-container>
                <div>
                    <label>Width: </label><br>
                    <input class="__VSTEditor_input" type="text" placeholder="Enter image width" v-model="width">
                    <br><br><br>
                    <label>Height: </label><br>
                    <input class="__VSTEditor_input" type="text" placeholder="Enter image height" v-model="height">
                </div>
                <div>
                    <label>Alt: </label><br>
                    <input class="__VSTEditor_input" type="text" placeholder="Enter alt" v-model="alt">
                    <br><br><br>
                    <button class="__VSTEditor_button" @click="saveImageData">
                        OK
                    </button>
                    <button class="__VSTEditor_button" @click="close">
                        Close
                    </button>
                </div>
            </form-container>
        </settings>
    </transition>
</template>

<script>
import {ref, onMounted} from 'vue'

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
        const width = ref('')
        const height = ref('')
        const alt = ref('')

        onMounted(()=>{
            if(props.image == null) return ;

            width.value = props.image.getAttribute('width') || 'auto'
            height.value = props.image.getAttribute('height') || 'auto'
            alt.value = props.image.getAttribute('alt') || ''
        })

        function saveImageData() {
            props.image.setAttribute('width', width.value)
            props.image.setAttribute('height', height.value)
            props.image.setAttribute('alt', alt.value)
        }

        function closeWindow() {
            context.emit("settingsWindowsClosed")
        }

        return {
            saveImageData: saveImageData,
            close: closeWindow,
            width: width,
            height: height,
            alt: alt
        }
    },
}
</script>

<style lang="sass" scoped>

</style>