import { useState } from 'react'
import './App.css'


function App() {
  const [notes, setNotes] = useState([
    {
      id:1,
      text:"hello"
    }
  ]);
  const [inputNote, setInputNote] = useState("");


  function handleInputChange(e){
    setInputNote(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault(); // Mencegah pengiriman default formulir
    if (inputNote.trim() !== "") {
      const newNote = {
        id: new Date().getTime(),
        text: inputNote
      };

      setNotes([...notes, newNote]); // Tambahkan catatan baru tanpa mengganti daftar sebelumnya
      setInputNote(""); // Kosongkan input setelah menambahkan catatan
    }
  }

  function handleDeleteNote(id) {
    setNotes(notes.filter(note => note.id !== id));
  }

  return (
    <>
      <div >
        <h1>Notes</h1>
        <form className='note-input' onSubmit={handleSubmit}>
          <input type="text" placeholder='Add a note' value={inputNote} onChange={handleInputChange} />
          <button>Add</button>
        </form>

        <ul className='note-list'>
          {notes.map((item) => (
            <li key={item.id}>
              {item.text}
              <button onClick={() => handleDeleteNote(item.id)}>Delete</button>
            </li>
          ))}
        </ul>

      </div>
    </>
  )
}


export default App;