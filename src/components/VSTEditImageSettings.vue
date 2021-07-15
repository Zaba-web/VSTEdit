<template>
    <transition name="vste-fade">
        <settings :is-visible="isVisible" :theme="theme">
            <form-container>
                <div>
                    <label>Width: </label><br>
                    <input class="__VSTEditor_input" type="text" placeholder="Enter image width">
                    <br><br><br>
                    <label>Height: </label><br>
                    <input class="__VSTEditor_input" type="text" placeholder="Enter image height">
                </div>
                <div>
                    <label>Alt: </label><br>
                    <input class="__VSTEditor_input" type="text" placeholder="Enter alt">
                    <br><br><br>
                    <button class="__VSTEditor_button">
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
        return {
            close: ()=>{context.emit("settingsWindowsClosed")}
        }
    },
}
</script>

<style lang="sass" scoped>

</style>