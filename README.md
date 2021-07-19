# vst-edit
WYSIWYG text editor for Vue 3
![alt text](https://github.com/Zaba-web/VSTEdit/raw/main/image.jpg)


## Install
```
npm i vst-edit
```

## Basic usage
Import VSTEdit component into your project
```
import {VSTEdit} from 'vst-edit'
```
Then register VSTEdit component and put it on the page. This text editor could be used in forms without any additional code. Inside the editor creates hidden input with name ```VSTEditor_input``` **it can be specified by using `input-name` attribute**.

## Configuration
Editor can be configured by using following properties:

- `theme` : Editor has two color themes: dark and light. Dark theme is set by default. To specify color theme you could use this property. It may accept two values: `dark-theme` or `light-theme`
- `input-name` : Using this attribute you can change name of the hidden input. It expects string value.
- `display-group-name` : Use it to specify if tools group name will be displayed. Expects boolean value. True by default.
- `auto-save` : Use it to enable automatic text saving into local storage. Expects boolean value. False by default.
- `auto-save-time` : Time interval for text saving. Expects number value in milliseconds If auto save is enabled, auto-save-time is 30000 ms by default.
- `auto-save-identifier` : Key name in local storage. Expects string value. If auto save is enabled, auto-save-identifier is *__VSTEditor* by default.
- `content` : You can use that property to push HTML content into the editor.

For example: 
```
<editor theme="dark-theme" input-name="content" :display-group-name="false" :auto-save="true" />
```

### Image loading
Editor supports image loading. To enable this feature you should configure link to image handler. For this type of configuration editor uses **Provide / Inject**. To specify link to the image handler you need to provide `customSettings` in one of the top-level components relatively to the editor *For example in App.vue*:
```
	provide: {
		customSettings: {
			editorSettings: {
				imageLoadHandler: 'http://your-backend.com/image-handler'
			}
		}
	}
```
File input name is *upload*.