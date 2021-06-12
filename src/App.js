import "./App.css";
import Editor from "./editor/editor";
import Sidebar from "./sidebar/sidebar";
import { useState } from "react";
import {projectAuth} from './firebase/config'
import Authentication from './Authentication/authentication'
import { useAuthState } from "react-firebase-hooks/auth";
function App() {
  const [user]  = useAuthState(projectAuth)
  const [note, setNote] = useState({
    selectedNote: null,
    selectedNoteIndex: null,
    notes: null,
  });
  const { selectedNote } = note;
  return (
    <div className="App">
    {
      !user ? (
        <Authentication/>
      ) : (
        <div className="app-container">
        <Sidebar setNote={setNote} note={note} />
        {
          selectedNote &&
           <Editor setNote={setNote} note={note} />
        }

      </div>
      )
    }
      
    </div>
  );
}

export default App;
