export default [
    {
        name: 'Headers',
        tools: [
            {
                name: 'h1_header', // name which may be used in parent component of editor
                title: "H1 Title", // title attribute value
                displayContent: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="10.831" viewBox="0 0 11.625 10.831" class="VSTEdit__icon">
                        <path id="Subtraction_51" data-name="Subtraction 51" d="M5.37,14H.435v-.706H.7a3.242,3.242,0,0,0,1.133-.112c.144-.074.217-.273.217-.592V4.58c0-.319-.073-.518-.217-.592A3.242,3.242,0,0,0,.7,3.875H.435V3.17H5.37v.706H5.085a3.238,3.238,0,0,0-1.132.113c-.145.075-.218.274-.218.592v3.4H8.76V4.58c0-.319-.073-.518-.217-.592A3.242,3.242,0,0,0,7.41,3.875H7.2V3.17h4.86v.706h-.27a3.238,3.238,0,0,0-1.132.113c-.145.075-.218.274-.218.592v8.01c0,.318.073.518.218.592a3.238,3.238,0,0,0,1.132.112h.27V14H7.14v-.706h.27a3.242,3.242,0,0,0,1.133-.112c.144-.074.217-.273.217-.592v-3.8H3.735v3.8c0,.318.073.518.218.592a3.238,3.238,0,0,0,1.132.112H5.37V14Z" transform="translate(-0.435 -3.17)"/>
                    </svg>
                `, // text or HTML code that will be displayed on toolbar
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
                displayContent: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="10.831" viewBox="0 0 11.625 10.831" class="VSTEdit__icon" style='width:12px'>
                        <path id="Subtraction_51" data-name="Subtraction 51" d="M5.37,14H.435v-.706H.7a3.242,3.242,0,0,0,1.133-.112c.144-.074.217-.273.217-.592V4.58c0-.319-.073-.518-.217-.592A3.242,3.242,0,0,0,.7,3.875H.435V3.17H5.37v.706H5.085a3.238,3.238,0,0,0-1.132.113c-.145.075-.218.274-.218.592v3.4H8.76V4.58c0-.319-.073-.518-.217-.592A3.242,3.242,0,0,0,7.41,3.875H7.2V3.17h4.86v.706h-.27a3.238,3.238,0,0,0-1.132.113c-.145.075-.218.274-.218.592v8.01c0,.318.073.518.218.592a3.238,3.238,0,0,0,1.132.112h.27V14H7.14v-.706h.27a3.242,3.242,0,0,0,1.133-.112c.144-.074.217-.273.217-.592v-3.8H3.735v3.8c0,.318.073.518.218.592a3.238,3.238,0,0,0,1.132.112H5.37V14Z" transform="translate(-0.435 -3.17)"/>
                    </svg>
                `, 
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
                displayContent: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="10.831" viewBox="0 0 11.625 10.831" class="VSTEdit__icon" style='width:10px'>
                        <path id="Subtraction_51" data-name="Subtraction 51" d="M5.37,14H.435v-.706H.7a3.242,3.242,0,0,0,1.133-.112c.144-.074.217-.273.217-.592V4.58c0-.319-.073-.518-.217-.592A3.242,3.242,0,0,0,.7,3.875H.435V3.17H5.37v.706H5.085a3.238,3.238,0,0,0-1.132.113c-.145.075-.218.274-.218.592v3.4H8.76V4.58c0-.319-.073-.518-.217-.592A3.242,3.242,0,0,0,7.41,3.875H7.2V3.17h4.86v.706h-.27a3.238,3.238,0,0,0-1.132.113c-.145.075-.218.274-.218.592v8.01c0,.318.073.518.218.592a3.238,3.238,0,0,0,1.132.112h.27V14H7.14v-.706h.27a3.242,3.242,0,0,0,1.133-.112c.144-.074.217-.273.217-.592v-3.8H3.735v3.8c0,.318.073.518.218.592a3.238,3.238,0,0,0,1.132.112H5.37V14Z" transform="translate(-0.435 -3.17)"/>
                    </svg>
                `, 
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
                displayContent: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="10.831" viewBox="0 0 11.625 10.831" class="VSTEdit__icon" style='width:8px'>
                        <path id="Subtraction_51" data-name="Subtraction 51" d="M5.37,14H.435v-.706H.7a3.242,3.242,0,0,0,1.133-.112c.144-.074.217-.273.217-.592V4.58c0-.319-.073-.518-.217-.592A3.242,3.242,0,0,0,.7,3.875H.435V3.17H5.37v.706H5.085a3.238,3.238,0,0,0-1.132.113c-.145.075-.218.274-.218.592v3.4H8.76V4.58c0-.319-.073-.518-.217-.592A3.242,3.242,0,0,0,7.41,3.875H7.2V3.17h4.86v.706h-.27a3.238,3.238,0,0,0-1.132.113c-.145.075-.218.274-.218.592v8.01c0,.318.073.518.218.592a3.238,3.238,0,0,0,1.132.112h.27V14H7.14v-.706h.27a3.242,3.242,0,0,0,1.133-.112c.144-.074.217-.273.217-.592v-3.8H3.735v3.8c0,.318.073.518.218.592a3.238,3.238,0,0,0,1.132.112H5.37V14Z" transform="translate(-0.435 -3.17)"/>
                    </svg>
                `, 
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
                displayContent: `
                    <svg xmlns="http://www.w3.org/2000/svg" height="10.831" viewBox="0 0 11.625 10.831" class="VSTEdit__icon" style='width:6px'>
                        <path id="Subtraction_51" data-name="Subtraction 51" d="M5.37,14H.435v-.706H.7a3.242,3.242,0,0,0,1.133-.112c.144-.074.217-.273.217-.592V4.58c0-.319-.073-.518-.217-.592A3.242,3.242,0,0,0,.7,3.875H.435V3.17H5.37v.706H5.085a3.238,3.238,0,0,0-1.132.113c-.145.075-.218.274-.218.592v3.4H8.76V4.58c0-.319-.073-.518-.217-.592A3.242,3.242,0,0,0,7.41,3.875H7.2V3.17h4.86v.706h-.27a3.238,3.238,0,0,0-1.132.113c-.145.075-.218.274-.218.592v8.01c0,.318.073.518.218.592a3.238,3.238,0,0,0,1.132.112h.27V14H7.14v-.706h.27a3.242,3.242,0,0,0,1.133-.112c.144-.074.217-.273.217-.592v-3.8H3.735v3.8c0,.318.073.518.218.592a3.238,3.238,0,0,0,1.132.112H5.37V14Z" transform="translate(-0.435 -3.17)"/>
                    </svg>
                `,
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
        name: 'Image',
        tools: [
            {
                name: 'insert_name', 
                title: "Upload Image", 
                displayContent: `
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" class='VSTEdit__icon'>
                        <g>
                            <g>
                                <g>
                                    <path d="M464,0H48C21.49,0,0,21.49,0,48v416c0,26.51,21.49,48,48,48h416c26.51,0,48-21.49,48-48V48C512,21.49,490.51,0,464,0z
                                        M480,464c0,8.837-7.163,16-16,16H48c-8.837,0-16-7.163-16-16V48c0-8.837,7.163-16,16-16h416c8.837,0,16,7.163,16,16V464z"/>
                                    <path d="M347.36,276.64c-6.241-6.204-16.319-6.204-22.56,0l-36.8,36.8l-68.64-68.64c-6.241-6.204-16.319-6.204-22.56,0l-112,112
                                        c-6.186,6.31-6.087,16.44,0.223,22.626c2.935,2.878,6.866,4.516,10.977,4.574h320c8.836,0.051,16.041-7.07,16.093-15.907
                                        c0.025-4.299-1.681-8.426-4.733-11.453L347.36,276.64z"/>
                                    <circle cx="304" cy="176" r="48"/>
                                </g>
                            </g>
                        </g>
                    </svg>
                `, 
                action(editorState, insertFunction) {

                    // check if link to image handler configured
                    if(!editorState.config) {
                        alert("This editor instance is not configured to upload images")
                        return ;
                    }

                    /*
                    *   Create form with file input dynamically
                    *   We need it in order to avoid nested forms in HTML markup
                    */

                    const formContainer = document.querySelector('.VSTEdit_additional-contianer')
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
                            // request failed
                            if(request.status != 200) { 
                                alert(`Error: image could not be uploaded. Status code: ${request.status}`) 
                                return ;
                            }
                            
                            let imageLink = request.responseText
                            insertFunction(editorState.targetElement, `<p><img src='${imageLink}'></p>`)

                            form.remove() // when uploading an image, the form is deleted 
                        }

                        request.send(formData)
                    })
                    
                    input.click() // open file dialog
                }
            },
        ]
    },
    {
        name: 'Alignment',
        tools: [
            {
                name: 'align_left', 
                title: "Align left", 
                displayContent: `
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 333 333" style="enable-background:new 0 0 333 333;" xml:space="preserve" class='VSTEdit__icon'>
                    <g>
                        <path d="M323,31.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,31.5,323,31.5z"/>
                    </g>
                    <g>
                        <path d="M230,114.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h220c5.5,0,10-4.5,10-10S235.5,114.5,230,114.5z"/>
                    </g>
                    <g>
                        <path d="M323,198.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,198.5,323,198.5z"/>
                    </g>
                    <g>
                        <path d="M151,281.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h141c5.5,0,10-4.5,10-10S156.5,281.5,151,281.5z"/>
                    </g>
                </svg>
                `, 
                action(editorState) { 
                    if(!editorState.targetElement.classList.contains('__VSTEditor_content'))
                        editorState.targetElement.style.textAlign = "left"
                }
            },
            {
                name: 'align_center', 
                title: "Align center", 
                displayContent: `
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 334.367 334.367" style="enable-background:new 0 0 334.367 334.367;" xml:space="preserve" class='VSTEdit__icon'>
                        <g>
                            <path d="M10.449,52.245h313.469c5.771,0,10.449-4.678,10.449-10.449s-4.678-10.449-10.449-10.449H10.449
                                C4.678,31.347,0,36.025,0,41.796S4.678,52.245,10.449,52.245z"/>
                            <path d="M57.469,114.939c-5.771,0-10.449,4.678-10.449,10.449c0,5.771,4.678,10.449,10.449,10.449h219.429
                                c5.771,0,10.449-4.678,10.449-10.449c0-5.771-4.678-10.449-10.449-10.449H57.469z"/>
                            <path d="M323.918,198.531H10.449C4.678,198.531,0,203.209,0,208.98s4.678,10.449,10.449,10.449h313.469
                                c5.771,0,10.449-4.678,10.449-10.449S329.689,198.531,323.918,198.531z"/>
                            <path d="M237.714,282.122H96.653c-5.771,0-10.449,4.678-10.449,10.449s4.678,10.449,10.449,10.449h141.061
                                c5.771,0,10.449-4.678,10.449-10.449S243.485,282.122,237.714,282.122z"/>
                        </g>
                    </svg>
                `, 
                action(editorState) { 
                    if(!editorState.targetElement.classList.contains('__VSTEditor_content'))
                        editorState.targetElement.style.textAlign = "center"
                }
            },            
            {
                name: 'align_right', 
                title: "Align right", 
                displayContent: `
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 333 333" style="enable-background:new 0 0 333 333;" xml:space="preserve" class='VSTEdit__icon'>
                        <g>
                            <path d="M323,31.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,31.5,323,31.5z"/>
                        </g>
                        <g>
                            <path d="M323,114.5H104c-5.5,0-10,4.5-10,10s4.5,10,10,10h219c5.5,0,10-4.5,10-10S328.5,114.5,323,114.5z"/>
                        </g>
                        <g>
                            <path d="M323,198.5H10c-5.5,0-10,4.5-10,10s4.5,10,10,10h313c5.5,0,10-4.5,10-10S328.5,198.5,323,198.5z"/>
                        </g>
                        <g>
                            <path d="M323,281.5H182c-5.5,0-10,4.5-10,10s4.5,10,10,10h141c5.5,0,10-4.5,10-10S328.5,281.5,323,281.5z"/>
                        </g>
                    </svg>
                `, 
                action(editorState) { 
                    if(!editorState.targetElement.classList.contains('__VSTEditor_content'))
                        editorState.targetElement.style.textAlign = "right"
                }
            },
        ]
    },
    {
        name: 'Text',
        tools: [
            {
                name: 'link', 
                title: "Create link", 
                displayContent: `
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 511.997 511.997" style="enable-background:new 0 0 511.997 511.997;" xml:space="preserve" class='VSTEdit__icon'>
                    <g transform="translate(1 1)">
                            <g>
                                <path d="M211.26,389.24l-60.331,60.331c-25.012,25.012-65.517,25.012-90.508,0.005c-24.996-24.996-24.996-65.505-0.005-90.496
                                    l120.683-120.683c24.991-24.992,65.5-24.992,90.491,0c8.331,8.331,21.839,8.331,30.17,0c8.331-8.331,8.331-21.839,0-30.17
                                    c-41.654-41.654-109.177-41.654-150.831,0L30.247,328.909c-41.654,41.654-41.654,109.177,0,150.831
                                    c41.649,41.676,109.177,41.676,150.853,0l60.331-60.331c8.331-8.331,8.331-21.839,0-30.17S219.591,380.909,211.26,389.24z"/>
                                <path d="M479.751,30.24c-41.654-41.654-109.199-41.654-150.853,0l-72.384,72.384c-8.331,8.331-8.331,21.839,0,30.17
                                    c8.331,8.331,21.839,8.331,30.17,0l72.384-72.384c24.991-24.992,65.521-24.992,90.513,0c24.991,24.991,24.991,65.5,0,90.491
                                    L316.845,283.638c-24.992,24.992-65.5,24.992-90.491,0c-8.331-8.331-21.839-8.331-30.17,0s-8.331,21.839,0,30.17
                                    c41.654,41.654,109.177,41.654,150.831,0l132.736-132.736C521.405,139.418,521.405,71.894,479.751,30.24z"/>
                            </g>
                    </g>
                </svg>
                `, 
                action(editorState, insertFunction, wrappingFunction) { 
                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) return;

                    const a = document.createElement("a")
                    a.href = "#"

                    wrappingFunctionResult.append(a, wrappingFunctionResult.selectedText)
                }
            },
            {
                name: 'strong', 
                title: "Strong text", 
                displayContent: `
                    <svg enable-background="new 0 0 467.765 467.765" viewBox="0 0 467.765 467.765" xmlns="http://www.w3.org/2000/svg" class='VSTEdit__icon'>
                        <path d="m360.345 233.882c29.835-24.139 48.949-61.04 48.949-102.324 0-72.545-59.013-131.558-131.559-131.558h-219.264v58.471h29.235v350.824h-29.235v58.471h219.265c72.546 0 131.559-59.013 131.559-131.559-.001-41.285-19.115-78.186-48.95-102.325zm-82.61 175.412h-131.559v-146.176h131.559c40.299 0 73.088 32.79 73.088 73.088s-32.789 73.088-73.088 73.088zm0-204.647h-131.559v-146.176h131.559c40.299 0 73.088 32.79 73.088 73.088s-32.789 73.088-73.088 73.088z"/>
                    </svg>
                `, 
                action(editorState, insertFunction, wrappingFunction) { 
                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) return;

                    const strongItem = document.createElement("strong")
                    wrappingFunctionResult.append(strongItem, wrappingFunctionResult.selectedText)
                }
            },
            {
                name: 'idiomatic', 
                title: "Idiomatic text", 
                displayContent: `
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 994.4 994.4" style="enable-background:new 0 0 994.4 994.4;" xml:space="preserve" class='VSTEdit__icon'>
                        <g>
                            <path d="M524.65,766.3c2.3-7.699,4.6-15.6,6.6-23.6c0.301-1.3,35.101-135.6,72.301-275.8c64-241.1,79.6-289.6,83.1-297
                                c11.9-24.6,31.2-43.2,59-56.9c24-11.8,54.6-19.6,91-23.2c10.7-1.1,20.8-7,28.2-16.6c6.7-8.7,10.6-19.7,10.6-30.2
                                c0-23.7-19.3-43-43-43h-487.5c-23.7,0-43,19.3-43,43v1.5c0,21.2,15.2,39,36.101,42.4c27.699,4.5,65.699,10.7,95.5,24.8
                                c15.3,7.2,27.199,16,35.1,26c9,11.3,13.4,24.4,13.4,39.9c0,29-8.5,58.1-16.7,86.2c-1.7,5.9-3.5,12.1-5.2,18.1
                                c-10.5,37.5-26,94.4-43.9,160.3c-41.3,151.7-92.699,340.4-105.6,376.3c-8.7,24.2-41,81.5-152.1,90c-10.8,0.8-20.9,5.7-28.2,13.601
                                c-7.4,8-11.4,18.3-11.4,29.199v0.101c0,23.7,19.3,43,43,43h487.601c23.699,0,43-19.3,43-43v-0.3c0-21.7-16.2-40-37.7-42.601
                                c-4.2-0.5-8.3-1-12.7-1.5c-42.8-4.899-96-11.1-118.4-40.2c-10.399-13.5-13.699-31.3-10.3-54.199
                                C515.65,797.101,520.051,782.101,524.65,766.3z"/>
                        </g>
                    </svg>
                `, 
                action(editorState, insertFunction, wrappingFunction) { 
                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) return;

                    const idiomaticItem = document.createElement("i")
                    wrappingFunctionResult.append(idiomaticItem, wrappingFunctionResult.selectedText)
                }
            },
            {
                name: 'underline', 
                title: "Undelined text", 
                displayContent: `
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    height="970.5px" viewBox="0 0 970.5 970.5" style="enable-background:new 0 0 970.5 970.5;" xml:space="preserve" class='VSTEdit__icon'>
                        <g>
                            <path d="M116.1,868.5c-28.2,0-51,22.8-51,51s22.8,51,51,51h741.5c28.199,0,51-22.8,51-51s-22.801-51-51-51H116.1z"/>
                            <path d="M940.9,45.1c0-4.9,0-10.1,0-15.1c0-16.6-13.4-30-30-30H582.199c-16.6,0-30,13.4-30,30v14.5c0,15.5,11.801,28.4,27.201,29.9
                                c14.5,1.4,29,3.5,43.299,6.3c30.201,5.9,44.9,22.7,44.9,53.3v374.9c0,22-2.5,45.399-7.301,69.5c-4.6,23.1-13.898,45-27.6,65
                                c-14.299,20.1-34.199,36.899-59,49.899c-21.6,11.3-51.4,17.7-88.299,19.2c-37-1.4-66.7-7.9-88.3-19.2
                                c-24.801-13-44.7-29.7-59-49.899c-13.7-20-23-41.9-27.601-65c-4.8-24.2-7.3-47.601-7.3-69.5v-375c0-30.5,14.7-47.3,44.9-53.3
                                c14.3-2.8,28.699-4.9,43.3-6.3c15.399-1.5,27.2-14.4,27.2-29.9V30c0-16.6-13.4-30-30-30h-329c-16.6,0-30,13.4-30,30
                                c0,5,0,10.2,0,15.1c0,14.7,10.7,27.3,25.2,29.6C73,77.6,94.9,81.8,98.3,83c27,9.8,44.2,27.4,44.2,57v408.6c0,34.4,7.4,67.9,22,99.5
                                c14.6,31.601,36.5,60,65.2,84.4l0.1,0.1c28.8,24.2,64.8,43.601,106.9,57.7c41.8,14,90,21.101,143.2,21.101c1.7,0,3.5,0,5.399-0.101
                                c2,0,3.701,0.101,5.4,0.101C543.9,811.4,592,804.3,633.9,790.3c42.1-14.1,78-33.5,106.898-57.7l0.102-0.1
                                c28.699-24.4,50.6-52.8,65.199-84.4c14.6-31.6,22-65.1,22-99.5V140.1c0-29.6,17.301-47.2,44.199-57c3.4-1.2,25.301-5.4,43.5-8.3
                                C930.299,72.4,940.9,59.8,940.9,45.1z"/>
                        </g>
                    </svg>
                `, 
                action(editorState, insertFunction, wrappingFunction) { 
                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) return;

                    const underlineItem = document.createElement("u")
                    wrappingFunctionResult.append(underlineItem, wrappingFunctionResult.selectedText)
                }
            },
            {
                name: 'strikethrough', 
                title: "Strikethrough text", 
                displayContent: `
                <svg enable-background="new 0 0 467.765 467.765" viewBox="0 0 467.765 467.765" xmlns="http://www.w3.org/2000/svg" class='VSTEdit__icon'>
                    <path d="m165.462 175.412c-11.968-12.548-19.286-29.342-19.286-47.679 0-38.186 31.077-69.263 69.263-69.263h164.62v-58.47h-164.62c-70.433 0-127.733 57.3-127.733 127.733 0 16.809 3.578 32.82 9.566 47.679z"/><path d="m302.303 292.353c11.968 12.548 19.286 29.342 19.286 47.679 0 38.186-31.077 69.263-69.262 69.263h-164.621v58.471h164.62c70.433 0 127.733-57.3 127.733-127.733 0-16.809-3.576-32.822-9.564-47.679-.001-.001-68.192-.001-68.192-.001z"/><path d="m58.471 204.647h350.824v58.471h-350.824z"/>
                </svg>
                `, 
                action(editorState, insertFunction, wrappingFunction) { 
                    const wrappingFunctionResult = wrappingFunction()

                    if(wrappingFunctionResult == null) return;

                    const deletedItem = document.createElement("del")
                    wrappingFunctionResult.append(deletedItem, wrappingFunctionResult.selectedText)
                }
            }
        ]
    },
    {
        name: "Lists",
        tools: [
            {
                name: 'u_list', 
                title: "Unordered list", 
                displayContent: `
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 512.18 512.18" style="enable-background:new 0 0 512.18 512.18;" xml:space="preserve" class='VSTEdit__icon'>
                        <g>
                            <path d="M448.18,80h-320c-17.673,0-32,14.327-32,32s14.327,32,32,32h320c17.673,0,32-14.327,32-32S465.853,80,448.18,80z"/>
                        </g>
                        <g>
                            <path d="M64.18,112c-0.036-8.473-3.431-16.586-9.44-22.56c-12.481-12.407-32.639-12.407-45.12,0
                                C3.61,95.414,0.215,103.527,0.18,112c-0.239,2.073-0.239,4.167,0,6.24c0.362,2.085,0.952,4.124,1.76,6.08
                                c0.859,1.895,1.876,3.715,3.04,5.44c1.149,1.794,2.49,3.457,4,4.96c1.456,1.45,3.065,2.738,4.8,3.84
                                c1.685,1.227,3.512,2.248,5.44,3.04c2.121,1.1,4.382,1.908,6.72,2.4c2.073,0.232,4.167,0.232,6.24,0
                                c8.45,0.007,16.56-3.329,22.56-9.28c1.51-1.503,2.851-3.166,4-4.96c1.164-1.725,2.181-3.545,3.04-5.44
                                c1.021-1.932,1.826-3.971,2.4-6.08C64.419,116.167,64.419,114.073,64.18,112z"/>
                        </g>
                        <g>
                            <path d="M64.18,256c0.238-2.073,0.238-4.167,0-6.24c-0.553-2.065-1.359-4.053-2.4-5.92c-0.824-1.963-1.843-3.839-3.04-5.6
                                c-1.109-1.774-2.455-3.389-4-4.8c-12.481-12.407-32.639-12.407-45.12,0C3.61,239.414,0.215,247.527,0.18,256
                                c0.062,4.217,0.875,8.388,2.4,12.32c0.802,1.893,1.766,3.713,2.88,5.44c1.217,1.739,2.611,3.348,4.16,4.8
                                c1.414,1.542,3.028,2.888,4.8,4c1.685,1.228,3.511,2.249,5.44,3.04c1.951,0.821,3.992,1.412,6.08,1.76
                                c2.047,0.459,4.142,0.674,6.24,0.64c2.073,0.239,4.167,0.239,6.24,0c2.036-0.349,4.024-0.94,5.92-1.76
                                c1.981-0.786,3.861-1.807,5.6-3.04c1.772-1.112,3.386-2.458,4.8-4c1.542-1.414,2.888-3.028,4-4.8c1.23-1.684,2.251-3.51,3.04-5.44
                                c1.093-2.124,1.9-4.384,2.4-6.72C64.426,260.167,64.426,258.073,64.18,256z"/>
                        </g>
                        <g>
                            <path d="M64.18,400c0.237-2.073,0.237-4.167,0-6.24c-0.553-2.116-1.359-4.157-2.4-6.08c-0.859-1.895-1.876-3.715-3.04-5.44
                                c-1.112-1.772-2.458-3.386-4-4.8c-12.481-12.407-32.639-12.407-45.12,0c-1.542,1.414-2.888,3.028-4,4.8
                                c-1.164,1.725-2.181,3.545-3.04,5.44c-0.83,1.948-1.421,3.99-1.76,6.08c-0.451,2.049-0.665,4.142-0.64,6.24
                                c0.036,8.473,3.431,16.586,9.44,22.56c1.414,1.542,3.028,2.888,4.8,4c1.685,1.228,3.511,2.249,5.44,3.04
                                c1.951,0.821,3.992,1.412,6.08,1.76c2.047,0.459,4.142,0.674,6.24,0.64c2.073,0.239,4.167,0.239,6.24,0
                                c2.036-0.349,4.024-0.94,5.92-1.76c1.981-0.786,3.861-1.807,5.6-3.04c1.772-1.112,3.386-2.458,4.8-4
                                c1.542-1.414,2.888-3.028,4-4.8c1.231-1.683,2.252-3.51,3.04-5.44c1.092-2.125,1.899-4.384,2.4-6.72
                                C64.426,404.167,64.426,402.073,64.18,400z"/>
                        </g>
                        <g>
                            <path d="M480.18,224h-352c-17.673,0-32,14.327-32,32s14.327,32,32,32h352c17.673,0,32-14.327,32-32S497.853,224,480.18,224z"/>
                        </g>
                        <g>
                            <path d="M336.18,368h-208c-17.673,0-32,14.327-32,32c0,17.673,14.327,32,32,32h208c17.673,0,32-14.327,32-32
                                C368.18,382.327,353.853,368,336.18,368z"/>
                        </g>
                    </svg>
                `, 
                action(editorState, insertFunction) { 
                    insertFunction(editorState.targetElement, `<ul><li>Unordered List Item</li></ul>`)
                }
            },
            {
                name: 'o_list', 
                title: "Ordered list", 
                displayContent: `
                    <svg viewBox="0 -10 490.66667 490" xmlns="http://www.w3.org/2000/svg" class='VSTEdit__icon'>
                        <path d="m69.332031 299.597656h-53.332031c-8.832031 0-16-7.167968-16-16v-26.730468c0-20.609376 16.746094-37.375 37.332031-37.375h10.667969c2.945312 0 5.332031-2.414063 5.332031-5.398438v-5.332031c0-2.96875-2.386719-5.378907-5.332031-5.378907h-32c-8.832031 0-16-7.167968-16-16 0-8.832031 7.167969-16 16-16h32c20.585938 0 37.332031 16.769532 37.332031 37.378907v5.332031c0 20.628906-16.746093 37.398438-37.332031 37.398438h-10.667969c-2.941406 0-5.332031 2.410156-5.332031 5.375v10.730468h37.332031c8.832031 0 16 7.167969 16 16 0 8.832032-7.167969 16-16 16zm0 0"/><path d="m48 422.542969h-21.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h21.332031c2.945312 0 5.332031-2.414063 5.332031-5.398438v-5.332031c0-2.988281-2.386719-5.398438-5.332031-5.398438h-32c-8.832031 0-16-7.167968-16-16 0-8.832031 7.167969-16 16-16h32c20.585938 0 37.332031 16.765626 37.332031 37.398438v5.332031c0 20.609375-16.746093 37.398438-37.332031 37.398438zm0 0"/><path d="m48 470.625h-32c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h32c2.945312 0 5.332031-2.410156 5.332031-5.394531v-5.335938c0-2.964843-2.386719-5.375-5.332031-5.375h-21.332031c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h21.332031c20.585938 0 37.332031 16.769531 37.332031 37.375v5.335938c0 20.628906-16.746093 37.394531-37.332031 37.394531zm0 0"/><path d="m48 128.546875c-8.832031 0-16-7.167969-16-16v-80.214844h-16c-8.832031 0-16-7.144531-16-16 0-8.851562 7.167969-16 16-16h32c8.832031 0 16 7.167969 16 16v96.214844c0 8.832031-7.167969 16-16 16zm0 0"/><path d="m474.667969 91.128906h-330.667969c-8.832031 0-16-7.167968-16-16 0-8.832031 7.167969-16 16-16h330.667969c8.832031 0 16 7.167969 16 16 0 8.832032-7.167969 16-16 16zm0 0"/><path d="m474.667969 262.179688h-330.667969c-8.832031 0-16-7.167969-16-16 0-8.832032 7.167969-16 16-16h330.667969c8.832031 0 16 7.167968 16 16 0 8.832031-7.167969 16-16 16zm0 0"/><path d="m474.667969 433.207031h-330.667969c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h330.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                    </svg>
                `, 
                action(editorState, insertFunction) { 
                    insertFunction(editorState.targetElement, `<ol><li>Unordered List Item</li></ol>`)
                }
            }
        ]
    },
    {
        name: "Fullscreen",
        tools: [
            {
                name: 'toggle_fs', 
                title: "Full screen", 
                displayContent: `
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 357 357" style="enable-background:new 0 0 357 357;" xml:space="preserve" class='VSTEdit__icon'>
                        <g>
                            <g >
                                <path d="M0,280.5h76.5V357h51V229.5H0V280.5z M76.5,76.5H0v51h127.5V0h-51V76.5z M229.5,357h51v-76.5H357v-51H229.5V357z
                                        M280.5,76.5V0h-51v127.5H357v-51H280.5z"/>
                            </g>
                        </g>
                    </svg>
                `, 
                action(editorState) { 
                    if(!editorState.rootEditorElement.classList.contains('__VSTEditor_fullscreen'))
                        editorState.rootEditorElement.classList.add('__VSTEditor_fullscreen') 
                    else
                        editorState.rootEditorElement.classList.remove('__VSTEditor_fullscreen')
                }
            }
        ]
    }
]