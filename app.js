
class Note{
    constructor(id,title,text){
       this.id = id ; 
       this.title = title;
       this.text = text;
       
    }   
   }
   
   class App{
       constructor(){
           this.notes = [];

           this.$activeForm = document.querySelector(".active-form");
           this.$inactiveForm = document.querySelector(".inactive-form");
           this.$noteTitle = document.querySelector(".note-title");
           this.$noteText = document.querySelector(".note-text");
           this.$noteTitle = document.querySelector("#note-title");
           this.$noteText = document.querySelector("#note-text");

           this.addEventlisteners();
       }
       
       addEventlisteners(){
            document.body.addEventListener("click", (event) => {
            this.handleFormClick(event);
        })
    }
        handleFormClick(event){
           const isActiveClickedOn = this.$activeForm.contains(event.target);
           const isInactiveClickedOn = this.$inactiveForm.contains(event.target);
           const title = this.$noteTitle.value;
           const text = this.$noteText.value;

           if(isInactiveClickedOn){
            this.openActiveForm();
           }
           else if(!isInactiveClickedOn && !isActiveClickedOn){
            this.addNote({title,text})
            this.closeInactiveForm();
           }


        }

        openActiveForm(){
            this.$inactiveForm.style.display = "none";
            this.$activeForm.style.display = "block"; 
            this.$noteText.focus();
        }
        closeInactiveForm(){
            this.$inactiveForm.style.display = "block";
            this.$activeForm.style.display = "none"; 
            this.$noteText.value = "";
            this.$noteTitle.value = "";
        }

       addNote({ title,text}){
           const newNote = new Note(cuid(),title,text);
           this.notes = [...this.notes, newNote]; 
           this.displayNotes()
           
       }
   
       editNote(id, { text, title }){
           this.notes = notes.map((notes) => {
               if( note.id == id){
                   note.title = title;
                   note.text = text;
               }
            })
       }
   
       deleteNote(id) {
           this.note = this.note.filter((note) => note.id != id);
       }
   
       displayNotes(){
           this.notes.map((note) => 
               console.log(`
               ID: ${note.id}
               Title: ${note.title}
               Text: ${note.text}
               `))
       }
   }
   
   const app = new App();
   
   