<template>
	<div class="demo-container">
		<editor theme="dark-theme" input-name="content" :display-group-name="false" :auto-save="true" />
	</div>
</template>

<script>
import VSTEdit from "@/components/VSTEdit.vue"

export default {
	name: 'App',
	provide: {
		customSettings: {
			editorSettings: {imageLoadHandler: 'http://127.0.0.1:8000/api/upload-image'},
			// tools: [
			// 	{
			// 		name: 'Test',
			// 		tools: [
			// 			{
			// 				name: 'u_list', 
			// 				title: "Unordered list", 
			// 				displayContent: "ul", 
			// 				action(editorState, insertFunction) { 
			// 					insertFunction(editorState.targetElement, `<ul><li>Unordered List Item</li></ul>`)
			// 				}
			// 			}
			// 		]
			// 	}
			// ]
		}
	},
	components: {
		'editor': VSTEdit
	}
}
</script>

<style lang="sass">
body
	background: #1E252E
	font-family: 'Calibri Light'
.demo-container
	width: 900px
	height: 600px
	margin: 0 auto
	margin-top: 100px
</style>
