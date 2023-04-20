

let inputText = document.getElementById("inputText")
let inputDate = document.getElementById("inputDate")
let inputAmount = document.getElementById("inputAmount")
let addBtn = document.getElementById("add")
let body = document.getElementById("body")
let n=0;

addBtn.addEventListener("click" , function()
{
    var table = document.getElementsByTagName('table')[0];
    var newRow = table.insertRow(table.rows.length);

    var cel1 = newRow.insertCell(0)
    var cel2 = newRow.insertCell(1);
    var cel3 = newRow.insertCell(2);
    var cel4 = newRow.insertCell(3)
                  
    cel1.innerHTML = inputText.value;
    cel2.innerHTML = inputDate.value;
    cel3.innerHTML = "Rs." + inputAmount.value;
    cel4.innerHTML = `<button id="cancel" onclick="cancelItem(this)">X</button>`
})

function cancelItem(obj)
{
    let index,table =document.getElementById("table")
  
            var c = confirm("do you want to delete this row");
            if(c === true)
            {
                index = obj.parentNode.parentNode.rowIndex;
                table.deleteRow(index);
            }
        
        
}
