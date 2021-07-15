<template>
	<div class="demo-container">
		<editor></editor>
	</div>
</template>

<script>
import VSTEdit from "@/components/VSTEdit.vue"

export default {
	name: 'App',
	components: {
		'editor': VSTEdit
	}
}
</script>

<style lang="sass">
.demo-container
	width: 700px
	height: 500px
	margin: 0 auto
	margin-top: 150px
</style>
