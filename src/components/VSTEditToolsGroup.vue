<template>
    <div>
        <span>{{groupName}}</span>
        <div class="tools-container">
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
        }
    },

    setup() {
        
    },
}
</script>

<style lang="sass" scoped>
.tools-container
    display: flex
    flex-wrap: warp
    gap: 10px
    padding-top: 10px
</style>