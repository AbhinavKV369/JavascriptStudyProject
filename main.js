// Id calling
let kitchenInput = document.getElementById("kitchen-input")
let addBtn = document.getElementById("add-btn")
let kitchenItemList = document.getElementById("kitchen-item-list")
let KitchenItems = [];

// function declaration
function addKitchenItemList(){
    // Adding Elements
    let kitchenInputData = kitchenInput.value;
    let li = document.createElement("li");
    li.innerText = kitchenInputData;
    kitchenItemList.appendChild(li)
    kitchenInput.focus()
    kitchenInput.value = ""

    // Deleting Elements
    let trashBtn = document.createElement("i");
    trashBtn.classList.add('fas','fa-trash');
    li.appendChild(trashBtn);
}  
function onEnter(event){
    if(event.key === "Enter"){
        addKitchenItemList()
    }
}
function deleteKitchenItenList(event){
    if(event.target.classList[0] === "fas"){
       let item = event.target.parentElement;
       item.remove()
      
    }
}
// Adding EventListeners
addBtn.addEventListener("click",addKitchenItemList);
kitchenInput.addEventListener("keypress",onEnter);
kitchenItemList.addEventListener("click",deleteKitchenItenList)
