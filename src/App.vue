<template>
	<div class="demo-container">
		<editor>
			<h1>Test</h1>
		</editor>
	</div>
</template>

<script>
import VSTEdit from "@/components/VSTEdit.vue"

export default {
	name: 'App',
	provide: {
		customSettings: {
			editorSettings: {imageLoadHandler: 'http://127.0.0.1:8000/api/upload-image'}
		}
	},
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
