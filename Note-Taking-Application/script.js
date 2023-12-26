const addBtn = document.querySelector('#addBtn');
const main = document.querySelector('#main');

addBtn.addEventListener("click",addNote);

function addNote() {
    const noteNumber = document.querySelectorAll(".note").length + 1;
  
    const note = document.createElement('div');
    note.classList.add('note');
  
    note.innerHTML = `
      <div class="tool">
        <span>Note ${noteNumber}</span>
        <i class="save fas fa-save"></i>
        <i class="trash fas fa-trash"></i>
      </div>
      <textarea></textarea>
    `;


    const trash = note.querySelector('.trash');
    const save = note.querySelector('.save');
    const textarea = note.querySelector('textarea');

    trash.addEventListener("click",()=>{
        note.remove();
        saveNote();

    });

    save.addEventListener("click",saveNote);
    trash.addEventListener("click",saveNote);

    main.appendChild(note);
}

function saveNote(){

    const notes = document.querySelectorAll(".note textarea");
    const data = [];

    for(let i =0; i < notes.length; i++){
        data.push(notes[i].value);
    }

    if(data.length === 0){
        localStorage.removeItem("notes")
    }
    else{
        localStorage.setItem("notes",JSON.stringify(data));
    }

}
function loadNote(){
    const lsNotes = JSON.parse(localStorage.getItem("notes"));

    if(lsNotes !== null){

        lsNotes.forEach(noteText => {
            addNote();

            const notes = document.querySelectorAll(".note textarea");
            const lastNote = notes[notes.length - 1];
            lastNote.value = noteText;
            
        });
    }
    else{
        addNote();
    }

}

loadNote();