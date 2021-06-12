import React from "react";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteIcon from "@material-ui/icons/Delete";
import { removeHTMLTags } from "../helper";

const SidebarItem = ({classes, _note , _index , selectedNoteIndex , selectNote , deleteNote}) => {

  const confirmDelete = (note, index) =>{
     if(window.confirm(`Are you sure delete ${note.title}`)){
        deleteNote(note , index)
     }
  }

  return (
    <div key = {_index}>
        <ListItem
          align-items="flex-start"
          selected={selectedNoteIndex === _index}
          className={classes.listItem}
        >
        <div
        className={classes.textSelection}
        onClick={() => {
          // console.log("This is div" , _index)
          selectNote(_note, _index )}}
        >
          <ListItemText
            primary={_note.title}
            secondary = {removeHTMLTags(_note.body.substring(0, 30)) + '....'}
          />
        </div>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={() => {confirmDelete(_note, _index)}}
        />
        </ListItem>
    </div>
  );
};
export default withStyles(styles)(SidebarItem);
