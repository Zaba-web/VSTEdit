<template>
    <div class="__VSTEditor-form-container">
        <slot></slot>
    </div>
</template>

<style lang="sass">
.__VSTEditor-form-container
    width: 100%
    display: flex
    justify-content: space-between
    flex-wrap: wrap

    & div
        width: 45%
</style>