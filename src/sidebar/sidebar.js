import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import List from "@material-ui/core/List";
import { Divider, Button } from "@material-ui/core";
import SidebarItem from "../sidebaritem/sidebaritem"
import { useState , useEffect } from "react";
import useFirestore from "../hook/fireStore";
import firebase, {projectAuth, projectFirestore} from '../firebase/config'


const Sidebar = ({ classes, note, setNote }) => {
  const [newNote, setNewNote] = useState({
    addingNote: false,
    title: "",
  });
  
  const selectNote = (note, index) => {
    setNote({ ...note,  selectedNote: note, selectedNoteIndex: index });
    console.log(note)
  };
  const { allNotes } = useFirestore('todos');

  const { addingNote, title } = newNote;

  useEffect(() => {
    setNote({ ...note,  selectedNote: allNotes[note.selectedNoteIndex] });
  }, [allNotes, note. selectedNote]);


  const createNewNote = () => {
    setNewNote({...newNote ,  addingNote: !addingNote });
  };

  
  const  addNewNote = (e) =>{
   if(newNote.title === "") {
     alert("Please add a title")
   }else{
    projectFirestore
     .collection('todos')
     .add({
       title : title,
       body : "",
       createdAt : firebase.firestore.FieldValue.serverTimestamp()
     })
     setNewNote({title : null , addingNote : false})
     setNote({
       ...note,
       selectedNoteIndex: 0,
       selectedNote: null,})
      }
  }
  const updateTitle = (e) => {
    const text = e.target.value;
    // console.log(text)
    setNewNote({ ...newNote, title: text });
  };

  const deleteNote = (notee , index) =>{
      projectFirestore
      .collection('todos')
      .doc(notee.id)
      .delete();
    if(note.selectedNoteIndex === index){
      setNote({...note, selectedNoteIndex: null , selectNote: null})
    }else if(index > note.selectedNoteIndex ){
      setNote({
        ...note,
        selectedNoteIndex: note.selectedNoteIndex,
        selectNote : allNotes[note.selectedNoteIndex]
      });
    }else{
      note.selectedNoteIndex === 0
      ? setNote({
            selectedNoteIndex : note.selectedNoteIndex,
            selectedNote : allNotes[note.selectedNoteIndex]
      })
      :allNotes.length>1
      ? setNote({
        ...note,
        selectedNoteIndex: note.selectedNoteIndex - 1,
        selectedNote: allNotes[note.selectedNoteIndex - 1],
      })
      : setNote({...note , selectedNoteIndex : null , selectedNote : null})
    }
  }

  return (
    <div id="sidebar" className={classes.sidebarContaier}>
      <Button className={classes.newNoteBtn} onClick={createNewNote}>
        {addingNote ? "cancel" : "add Note"}
      </Button>
      {addingNote && (
        <div>
          <form onSubmit = {addNewNote}>
            <input
              className={classes.newNoteInput}
              type="text"
              placeholder="Enter your title"
              value={title}
              onChange={updateTitle}
              required
            />
            <Button type="submit" className={classes.newNoteSubmitBtn}>
              Add Note
            </Button>
          </form>
        </div>
      )}
        <List>
            {allNotes &&
                allNotes.map((_note , _index)=>{
                      return (
                        <div key = {_index}>
                            <SidebarItem
                              _note = {_note}  
                              _index = {_index}
                              selectedNoteIndex={note.selectedNoteIndex}
                              selectNote={selectNote}
                              deleteNote = {deleteNote}
                            />
                            <Divider/>
                        </div>
                      )
                })}
        </List>
            <Button
            // variant="contained" color="secondary"
            className={classes.newNoteSubmitBtn}
           onClick={() => projectAuth.signOut()}
           >SignOut</Button>  
    </div>
  );
};
export default withStyles(styles)(Sidebar);
