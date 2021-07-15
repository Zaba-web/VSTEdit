export default [
    {
        name: 'Headers',
        tools: [
            {
                name: 'h1_header', // name which may be used in parent component of editor
                title: "H1 Title", // title attribute value
                displayContent: "H1", // text or HTML code whitch will be displayed on toolbar
                action(selectedItem, insertFunction, wrappingFunction) {  // function that calls of click on tool
                    /*
                    *  selectedItem - HTML element that is active in editor 
                    *  inserFunction - allows insert HTML code in the end of selectedItem
                    *  wrappingFunction - allows wrap selected text in DOM element
                    */

                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) {
                        insertFunction(selectedItem, "<h1>New H1</h1>")
                    } else {
                        const headerItem = document.createElement("h1")
                        wrappingFunctionResult.append(headerItem, wrappingFunctionResult.selectedText)
                    }

                }
            }
        ]
    }
]