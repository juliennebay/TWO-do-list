function loadScript(){
    const taskInput = document.querySelector("input")
    const addButton = document.querySelector("#addItem")
    const clearButton = document.querySelector("#clearAll")

    function addItem(item){
        const ul = document.querySelector("ul")
        if (taskInput.value.length){
            const li = document.createElement("li")
            li.classList.add =("liItem")
            li.textContent = item || taskInput.value
            ul.appendChild(li)

        //store items in local storage
        // this if statement is programming-speak for 
        // "was this function called by an event handler or manually, with a parameter"
            if (!item){
                const itemsArray = JSON.parse(localStorage.getItem("items")) || []
                itemsArray.push(taskInput.value) 
                localStorage.setItem("items", JSON.stringify(itemsArray))
                //clear the input box after the item gets added
                taskInput.value = ""
                }
           }
    }
    
    // the function given to addEventListener is called with an event as the first parameter
    // it is called with an event as the first parameter because
    // we are adding it as a handler (addeventlistener) to a given event
    addButton.addEventListener("click", e => addItem())
    taskInput.addEventListener("keyup", e => 
        e.keyCode === 13 && addItem() //here additem is called with undefined
    )

    //call the addItem function with each item in local storage
    const itemsArray = JSON.parse(localStorage.getItem("items"))
    itemsArray && itemsArray.forEach(item => addItem(item))
//in line 38, item is each item from the array in local storage

    function clearItem(){
        localStorage.setItem("items", JSON.stringify([]))
        const ul = document.querySelector("ul")
        Array.from(ul.children).forEach(e => e.remove())
    }

    clearButton.addEventListener("click", clearItem)

}
document.addEventListener("DOMContentLoaded", loadScript)