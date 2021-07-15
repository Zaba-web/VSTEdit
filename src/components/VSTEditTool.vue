<template>
    <div class="tool-container" :class="theme" @click="useTool" :title="title">
        <div class="tool-inner-wrapper">
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        theme: String,
        index: Number,
        groupIndex: Number,
        name: String,
        title: String
    },

    setup(props, context) {
        
        // send to parent component id and name of tool to use
        function useTool(){
            context.emit('toolUsed', {
                index: props.index,
                groupIndex: props.groupIndex,
                name: props.name
            })
        }

        return {
            useTool: useTool
        }
    },
}
</script>

<style lang="sass" scoped>
.tool-container
    height: 30px
    min-width: 30px
    transition: .4s
    display: inline-block
    border-radius: 6px
    font-size: 12px
    cursor: pointer
    user-select: none

    & .tool-inner-wrapper
        height: 100%
        width: 100%
        display: flex
        justify-content: center
        align-items: center

    &.dark-theme
        background: #242931
        border: 1px solid #30363E
        &:hover
            background: #9F193A
            border-color: transparent
</style>