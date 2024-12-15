let kitchenInput = document.getElementById("kitchen-input")
let addBtn = document.getElementById("add-btn")
let kitchenItemList = document.getElementById("kitchen-item-list")

function addKitchenItemList(){
    let kitchenInputData = kitchenInput.value
    let li = document.createElement("li")
    li.innerText = kitchenInputData;
    kitchenItemList.appendChild(li)
    kitchenInput.value = "";
    kitchenInput.focus()
}   

addBtn.addEventListener("click",addKitchenItemList)