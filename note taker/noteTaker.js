
let myNote = [];

let inputEl = document.getElementById("inputText");
let addNote = document.getElementById("addNote");


let cardBody = document.getElementById("card-body");
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myNote") )


/*if (leadsFromLocalStorage) {
    myNote = leadsFromLocalStorage
    display(myNote)
}*/
addNote.addEventListener("click" , function()
{
    myNote.push(inputEl.value);
    inputEl.value = "" ;
    localStorage.setItem("myNote" , JSON.stringify(myNote))
    display(myNote);
})

function display(note) {
    let listItems = ""
    for (let i = 0; i <note.length; i++) 
    {
        listItems += `
        <div class="col-4 m-4">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Note ${i+1}</h5>
              <p class="card-text">${note[i]}</p>
              <button type="button" class="btn btn-primary" onclick="popup(${i})">View Details</button>

              <div class="modal-container" id="modal1">
                <div class="modal" id="myModal">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <span class="close" onclick="closeModal()">&times;</span>
                            <div class="modal-header">
                                <h5 class="modal-title"></h5>
                            </div>
                        
                            <div class="modal-body">
                                <p id="myBody"</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>


            
            </div>
          </div>
        </div>`
    }
    cardBody.innerHTML = listItems;

}

function popup(item)
{
    let myBody = document.getElementById("myBody");
    let myModal = document.getElementById("myModal");
    let modal = document.getElementById("modal1");
    myBody.innerHTML = myNote[item];
    myModal.style.display = "block";
    modal.style.display="block";
}

function closeModal()
{
    let modal = document.getElementById("modal1");
    let myModal = document.getElementById("myModal");
    modal.style.display="none";
    myModal.style.display = "none";
}

window.addEventListener("click" , function(event){
    
    let modal = document.getElementById("modal1");
    let myModal = document.getElementById("myModal");
    if(event.target==modal || event.target==myModal)
    {
        modal.style.display="none";
        myModal.style.display = "none";
    }
})