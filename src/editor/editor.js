import React from "react";
import ReactQuill from "react-quill";
import useDebounce from "../helper";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import { projectAuth, projectFirestore } from "../firebase/config";
import styles from "./style";
const Editor = ({ note, classes }) => {
  const [editorNoteBody, setEditorNoteBody] = useState(note.selectedNote.body);
  const [editorNoteTitle, setEditorNoteTitle] = useState(
    note.selectedNote.title
  );
  const updateBodyDebounce = useDebounce(editorNoteBody, 1500);
  const updateTitleDebounce = useDebounce(editorNoteTitle, 1500);
  // useEffect(() => {
  //   setEditorNoteTitle(note.selectedNote.title);
  // }, [note.selectedNote]);

  // useEffect(() => {
  //   setEditorNoteBody(note.selectedNote.body);
  // }, [note.selectedNote]);

  useEffect(() => {
    setEditorNoteTitle(note.selectedNote.title);
  }, [note.selectedNote]);

  useEffect(() => {
    setEditorNoteBody(note.selectedNote.body);
  }, [note.selectedNote]);

  useEffect(() => {
    if (updateBodyDebounce) {
      projectFirestore.collection("todos").doc(note.selectedNote.id).update({
        body: editorNoteBody,
      });
    }
  }, [updateBodyDebounce]);

  useEffect(() => {
    projectFirestore.collection("todos").doc(note.selectedNote.id).update({
      title: editorNoteTitle,
    });
  }, [updateTitleDebounce]);

  const upDateNote = (text) => {
    setEditorNoteBody(text);
  };
  const updateTitle = (e) => {
    setEditorNoteTitle(e.target.value);
  };

  return (
    <div id="editorContainer" className={classes.editorContainer}>
      <div className={classes.editorHeader}>
        <BorderColorIcon className={classes.editIcon} />
        <input
          placeholder="Enter Title..."
          className={classes.titleInput}
          value={editorNoteTitle}
          onChange={updateTitle}
        />
      </div>
      <ReactQuill
        id="quill"
        onChange={upDateNote}
        value={editorNoteBody}
      ></ReactQuill>
    </div>
  );
};
export default withStyles(styles)(Editor);
