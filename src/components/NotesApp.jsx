import { useContext, useRef, useState } from 'react';
import {UserContext} from '../Providers/UserProvider'

function NotesApp() {
    const countRef = useRef(0);
    const scrollRef = useRef(null);
    const data = useContext(UserContext);
    console.log(data, "this is context");

    const [noteInfo, setNoteInfo] = useState({
        title: "",
        priority: "",
        dueDate: "",
        description: ""
    });
    const [notes, setNotes] = useState([]);
    const [update, setUpdate] = useState(false);
    const [noteIndex, setNoteIndex] = useState(null);


    function noteInfoHandler(fieldName, value) {
      setNoteInfo({ ...noteInfo, [fieldName]: value });
    }
    function setNoteInfoBlank(){
        // It helps make fields of the form blank after 
        // a note has been added or the "Cancel" button 
        // has been pressed during update operation.

        setNoteInfo({
          title: "",
          priority: "",
          dueDate: "",
          description: ""
        });
    }
    function noteAdder() {
      setNotes([...notes, noteInfo]);
      setNoteInfoBlank();
    }
    function noteDeleter(providedIndex) {
      const response =  confirm("Are you sure you want to delete this item.");

      if (response) {
        setNotes(() => {
            return notes.filter((note, index) => {
                return index !== providedIndex;
            });
        });
      }
    }
    function noteUpdater() {
        setNotes(() => {
            return notes.with(noteIndex, noteInfo);
        });

        // const temp = [...notes];
        // temp[noteIndex] = noteInfo;
        // setNotes(temp)
        setUpdate(false);
        setNoteInfoBlank();
    }

    console.log(noteInfo);
    console.log(notes, "notesArray");

    return (
        <div>
            <h1>Notes APP</h1>
            <form className="bw-form">
                <div className="bw-group" style={{ padding: "5px" }}>
                    <label htmlFor="title" className="bw-label" ref={scrollRef}>Title: </label>
                    <input type="text" name="Note Title" value={noteInfo.title} placeholder="Enter Note Title" id="title" onChange={(e) => { noteInfoHandler("title", e.target.value) }} className="bw-input" style={{ padding: "5px", marginInline: "5px" }} />
                </div>
                <div className="bw-group" style={{ padding: "5px" }}>
                    <label htmlFor="priority-select" className="bw-label">Priority:  </label>
                    <select id="priority-select" name="priority" value={noteInfo.priority} className="bw-select" onChange={(e) => { noteInfoHandler("priority", e.target.value)}} style={{padding: "5px"}}>
                      <option>Select Priority</option>
                      <option value="high">High</option>
                      <option value="medium">Medium</option>
                      <option value="low">Low</option>
                    </select>
                </div>
                <div className="bw-group" style={{ padding: "5px" }}>
                    <label htmlFor="dueDate" className="bw-label">Due Date: </label>
                    <input type="date" name="Note DueDate" value={noteInfo.dueDate} id="dueDate" onChange={(e) => { noteInfoHandler("dueDate", e.target.value) }} className="bw-input" style={{ padding: "5px", marginInline: "5px" }} />
                </div>
                <div className="bw-group" style={{ padding: "5px" }}>
                    <label htmlFor="description" className="bw-label">Description: </label>
                    <textarea name="Note Description" id="description" rows="7" cols="30" value={noteInfo.description} placeholder="Enter Note Description here" onChange={(e) => { noteInfoHandler("description", e.target.value) }} className="bw-textarea" style={{ padding: "5px", marginInline: "5px" }}></textarea>
                </div>
                {update==true 
                    ? <div><button type="button" className="bw-btn" onClick={noteUpdater} style={{marginRight: "5px"}}>Update Note</button> 
                      <button type="button" className="bw-btn bw-btn-secondary" onClick={() => {setUpdate(false); setNoteInfoBlank()}}>Cancel</button></div>
                    : <button type="button" className="bw-btn" onClick={noteAdder}>Add Note</button>
                }   
            </form><br />
            {notes[0] &&
            <div><h1><u>Added Notes</u></h1>
            <div className='product-grid'>
                {notes.map((note, index) => {
                    return (
                        <div className="product-card">
                            <h2 className="product-title">{note.title}</h2>
                            <p className='product-price'>{note.priority}</p>
                            <p className='product-rating'>{note.dueDate}</p>
                            <p className="product-description">{note.description}</p>
                            <div style={{display: "flex",
                                justifyContent: "space-evenly"
                            }}>
                                <button type="button" className="bw-btn" onClick={()=>{setUpdate(true); setNoteInfo(note); setNoteIndex(index)}}>Edit</button>
                                <button type="button" className="bw-btn bw-btn-secondary" onClick={()=>noteDeleter(index)}>Delete</button>
                            </div>
                        </div>
                    )
                })}
            </div>
          </div>}
        </div>
    )
}

export default NotesApp
