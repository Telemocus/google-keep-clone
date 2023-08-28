class Note {
  constructor(id, title, text) {
    this.id = id;
    this.title = title;
    this.text = text;
  }
}

class App {
  constructor() {
    this.notes = [];

    this.$activeForm = document.querySelector(".active-form");
    this.$inactiveForm = document.querySelector(".inactive-form");
    this.$noteTitle = document.querySelector(".note-title");
    this.$noteText = document.querySelector(".note-text");
    this.$noteTitle = document.querySelector("#note-title");
    this.$noteText = document.querySelector("#note-text");
    this.$notes = document.querySelector(".notes");

    this.addEventlisteners();
  }

  addEventlisteners() {
    document.body.addEventListener("click", (event) => {
      this.handleFormClick(event);
    });
  }
  handleFormClick(event) {
    const isActiveClickedOn = this.$activeForm.contains(event.target);
    const isInactiveClickedOn = this.$inactiveForm.contains(event.target);
    const title = this.$noteTitle.value;
    const text = this.$noteText.value;

    if (isInactiveClickedOn) {
      this.openActiveForm();
    } else if (!isInactiveClickedOn && !isActiveClickedOn) {
      this.addNote({ title, text });
      this.closeInactiveForm();
    }
  }

  openActiveForm() {
    this.$inactiveForm.style.display = "none";
    this.$activeForm.style.display = "block";
    this.$noteText.focus();
  }
  closeInactiveForm() {
    this.$inactiveForm.style.display = "block";
    this.$activeForm.style.display = "none";
    this.$noteText.value = "";
    this.$noteTitle.value = "";
  }

  addNote({ title, text }) {
    if (text != "") {
      const newNote = new Note(cuid(), title, text);
      this.notes = [...this.notes, newNote];
      this.displayNotes();
    }
  }

  editNote(id, { text, title }) {
    this.notes = notes.map((notes) => {
      if (note.id == id) {
        note.title = title;
        note.text = text;
      }
    });
  }

  deleteNote(id) {
    this.note = this.note.filter((note) => note.id != id);
  }

  displayNotes() {
    this.$notes.innerHTML = this.notes.map(
      (note) => 
      `<div class="note" id="$(note,id)"> 
          <span class="material-icons check-circle">check_circle</span>
          <div class="title">${note.title}</div>
          <div class="text">${note.text}</div>
          <div class="note-footer">
            <div class="tooltip">
              <span class="material-icons-outlined hover small-icon"
                >add_alert</span
              >
              <span class="tooltip-text">Remind Me</span>
            </div>
            <div class="tooltip">
              <span class="material-icons-outlined hover small-icon"
                >person_add</span
              >
              <span class="tooltip-text">Collaborator</span>
            </div>
            <div class="tooltip">
              <span class="material-icons-outlined hover small-icon"
                >palette</span
              >
              <span class="tooltip-text">Background Options</span>
            </div>
            <div class="tooltip">
              <span class="material-icons-outlined hover small-icon"
                >image</span
              >
              <span class="tooltip-text">Add Image</span>
            </div>
            <div class="tooltip">
              <span class="material-icons-outlined hover small-icon"
                >archive</span
              >
              <span class="tooltip-text">Archive</span>
            </div>
            <div class="tooltip">
              <span class="material-icons-outlined hover small-icon"
                >more_vert</span
              >
              <span class="tooltip-text">More</span>
            </div>
          </div>
        </div>`
    ).join("");
  }
}

const app = new App();
