
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

           alert("constructor is running")
       }
   
       addNote({ title,text}){
           const newNote = new Note(id,title,text);
           this.notes = [...this.notes, newNote]; 
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
   
   