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
    flex-wrap: wrap
    gap: 10px
    padding: 10px 25px 0 0
    height: 100%
span
    font-size: 12px
</style>