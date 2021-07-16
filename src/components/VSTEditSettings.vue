<template>
    <div class="editor-element-setting-container" :class="theme" v-if="isVisible">
        <h3>
            Element settings
        </h3>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    
    props: {
        isVisible: {
            type: Boolean,
            default: false
        },
        theme : {
            type: String,
            default: 'dark-theme'
        }
    },

}
</script>

<style lang="sass" scoped>
.editor-element-setting-container
    width: 70%
    box-sizing: border-box
    padding: 5px 15px 25px 15px
    min-height: 150px
    position: absolute
    top: 100px
    left: 15%
    font-family: 'Calibri'
    border-radius: 6px

    &.dark-theme
        background: #1A2029
        color: #fff
        border: 1px solid #1F252E
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px

    &.light-theme
        background: #F5F5F5
        color: #181E27
        border: 1px solid #c2c2c2
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px
</style>