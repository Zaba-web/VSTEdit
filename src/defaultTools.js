export default [
    {
        name: 'Headers',
        tools: [
            {
                name: 'h1_header', // name which may be used in parent component of editor
                title: "H1 Title", // title attribute value
                displayContent: "H1", // text or HTML code whitch will be displayed on toolbar
                action(editorState, insertFunction, wrappingFunction) {  // function that calls of click on tool
                    /*
                    *  editorState - object that has following structure: {
                        targetElement - selected element in editor
                        config - editor configuration
                    }
                    *  inserFunction - allows insert HTML code in the end of selectedItem
                    *  wrappingFunction - allows wrap selected text in DOM element
                    */

                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) {
                        insertFunction(editorState.targetElement, "<h1>New H1</h1>")
                    } else {
                        const headerItem = document.createElement("h1")
                        wrappingFunctionResult.append(headerItem, wrappingFunctionResult.selectedText)
                    }

                }
            },
            {
                name: 'h2_header', 
                title: "H2 Title", 
                displayContent: "H2", 
                action(editorState, insertFunction, wrappingFunction) { 

                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) {
                        insertFunction(editorState.targetElement, "<h2>New H2</h2>")
                    } else {
                        const headerItem = document.createElement("h2")
                        wrappingFunctionResult.append(headerItem, wrappingFunctionResult.selectedText)
                    }

                }
            },
            {
                name: 'h3_header', 
                title: "H3 Title", 
                displayContent: "H3", 
                action(editorState, insertFunction, wrappingFunction) {  
                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) {
                        insertFunction(editorState.targetElement, "<h3>New H3</h3>")
                    } else {
                        const headerItem = document.createElement("h3")
                        wrappingFunctionResult.append(headerItem, wrappingFunctionResult.selectedText)
                    }

                }
            },
            {
                name: 'h4_header',
                title: "H4 Title", 
                displayContent: "H4", 
                action(editorState, insertFunction, wrappingFunction) {  
                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) {
                        insertFunction(editorState.targetElement, "<h4>New H4</h1>")
                    } else {
                        const headerItem = document.createElement("h4")
                        wrappingFunctionResult.append(headerItem, wrappingFunctionResult.selectedText)
                    }

                }
            },
            {
                name: 'h5_header', 
                title: "H5 Title",
                displayContent: "H5",
                action(editorState, insertFunction, wrappingFunction) {
                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) {
                        insertFunction(editorState.targetElement, "<h5>New H1</h5>")
                    } else {
                        const headerItem = document.createElement("h5")
                        wrappingFunctionResult.append(headerItem, wrappingFunctionResult.selectedText)
                    }

                }
            }
        ]
    },
    {
        name: 'Images',
        tools: [
            {
                name: 'insert_name', 
                title: "Upload Image", 
                displayContent: "I", 
                action(editorState, insertFunction) {

                    // check if link to image handler configured
                    if(!editorState.config) {
                        alert("This editor instrance is not configured to upload images")
                        return ;
                    }

                    /*
                    *   Create form with file input dynamically
                    *   We need it in order to avoid nested forms in HTML markup
                    */

                    const formContainer = document.querySelector('.additional-contianer')
                    const form = document.createElement("form")
                    const input = document.createElement("input")
                    
                    input.type = "file"
                    input.name = "upload"

                    form.enctype = "multipart/form-data"

                    form.appendChild(input)
                    formContainer.appendChild(form)

                    input.addEventListener("change", () => {
                        const formData = new FormData(form) // fetch file data from from
                        const request = new XMLHttpRequest()

                        request.open('POST', editorState.config.imageLoadHandler)

                        request.onload = () => {
                            if(request.status != 200) { 
                                alert("Error: image was not uploaded") 
                                return ;
                            }
                            
                            let imageLink = request.responseText
                            insertFunction(editorState.targetElement, `<img src='${imageLink}'>`)

                            form.remove() // when uploading an image, the form is deleted 
                        }

                        request.send(formData)
                    })
                    
                    input.click() // open file dialog
                }
            },
        ]
    }
]