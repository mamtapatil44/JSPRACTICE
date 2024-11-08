document.addEventListener("DOMContentLoaded", () => {
  console.log("before create note");
  function createNote() {
    const createNoteContainer = document.getElementById("notes-container");
    const input = document.createElement("textarea");
    input.placeholder = "Start writing here.....";

    const savebutton = document.createElement("button");
    savebutton.classList.add("save-btn");
    savebutton.textContent = "Save";
    savebutton.addEventListener("click", handleSaveNote);

    createNoteContainer.appendChild(input);
    createNoteContainer.appendChild(savebutton);
    displayNotes();
  }

  function handleSaveNote() {
    const input = document.querySelector("#notes-container textarea");
    console.log("input ",input.value)
    const noteText = input.value;
    if (input.value !== "") {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
      console.log("notes", notes)
      notes.push(input.value);

      localStorage.setItem("notes", JSON.stringify(notes));

      input.value = "";
      displayNotes();
    }
  }

  function displayNotes() {
    let notes = JSON.parse(localStorage.getItem('notes'));
    const nodeList = document.getElementById("notesList");
    nodeList.innerHTML ='';
    if (notes.length > 0) {
      notes.forEach((note,index) => {
        const notecard = document.createElement("li");
        notecard.textContent = note;

        const editbtn = document.createElement("button")
        editbtn.textContent = "Edit";
        editbtn.classList.add('edit-btn')
        editbtn.addEventListener('click' ,() => handleEdit(index))

        const deletebtn = document.createElement("button")
        deletebtn.textContent = "Delete"
        deletebtn.classList.add('delete-btn')
        deletebtn.addEventListener('click' ,() => handleDelete(index))

        notecard.appendChild(editbtn);
        notecard.appendChild(deletebtn);
        nodeList.appendChild(notecard);
      });
    }else{
      
        nodeList.innerHTML ='';
    }
  }

  function handleEdit(index){
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const newNote = prompt('Edit your note:', notes[index]);

    if (newNote !== null) {
      notes[index] = newNote;
      localStorage.setItem('notes', JSON.stringify(notes));
      displayNotes();
    }

  }
  function handleDelete(index){
    console.log("handle delete")
    let notes = JSON.parse(localStorage.getItem('notes'));
    notes.splice(index,1);
    console.log("successfully deleted notes" ,notes)
    localStorage.setItem("notes", JSON.stringify(notes));
    displayNotes();
  }
 
  createNote();
});
