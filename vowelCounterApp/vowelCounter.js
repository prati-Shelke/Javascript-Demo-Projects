

let myInput = ""

let count;
let inputText = document.getElementById("inputText");
let checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click" , function()
{

    myInput = inputText.value;
    myInput = myInput.toLowerCase();
    count=0;
    for(let i=0 ; i<myInput.length ; i++)
    {
        
        if(myInput[i] == 'a' || myInput[i] == 'e' || myInput[i] == 'i' || myInput[i] == 'o' || myInput[i] == 'u')
            {
                count++;
            }
    } 

    inputText.value = ""
   alert(`There are ${count} vowels !`);
})