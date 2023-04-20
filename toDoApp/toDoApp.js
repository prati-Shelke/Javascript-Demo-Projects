
let myInput = [];

let inputEl = document.getElementById("input-el");
let submitBtn = document.getElementById("submit-btn");
let clearBtn = document.getElementById("clear-btn");
let ol = document.getElementById("ol");
let cancelBtn = document.getElementById("cancel");
let doneBtn = document.getElementById("done");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myInput") )
let flag=0

if (leadsFromLocalStorage) {
    myInput = leadsFromLocalStorage
    display(myInput)
}
submitBtn.addEventListener("click" , function(){
    myInput.push(inputEl.value);
    inputEl.value = "" ;
    localStorage.setItem("myInput" , JSON.stringify(myInput))
    display(myInput);
})

clearBtn.addEventListener("click" ,function(){
    localStorage.clear()
    myInput = []
    display(myInput);
    
})

function display(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                    ${leads[i]}
                <button id="cancel" onclick="cancelItem(${i})">X</button>
                <button id="done" onclick="doneItem(${i})">Done</button>
            </li>
        `
        }
    ol.innerHTML = listItems
}




function cancelItem(item)
{
    
 let deletedItem = myInput.splice(item,1)
 display(myInput)
 localStorage.setItem("myInput" , JSON.stringify(myInput))

}

function doneItem(item)
{
    let deletedItem = myInput.splice(item,1)
 display(myInput)
 localStorage.setItem("myInput" , JSON.stringify(myInput))
  
  
 
 
   //display(myInput)
}