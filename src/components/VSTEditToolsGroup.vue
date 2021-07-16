<template>
    <div>
        <span v-if="displayGroupName">{{groupName}}</span>
        <div class="tools-container" :class="theme">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        groupName: {
            type: String,
            default: ""
        },
        displayGroupName: {
            type: Boolean,
            default: true
        },
        theme: {
            type: String,
            default: 'dark-theme'
        }
    }
}
</script>

<style lang="sass" scoped>
.tools-container
    display: flex
    flex-wrap: wrap
    gap: 10px
    padding: 10px 25px 0 0
    height: 100%
    position: relative

    &::after
        content: ''
        position: absolute
        height: 30%
        width: 1px
        top: 13px
        right: 7px
    
    &.dark-theme::after
        border-right: 1px solid #30363E

    &.light-theme::after
        border-right: 1px solid #c2c2c2

span
    font-size: 12px
</style>