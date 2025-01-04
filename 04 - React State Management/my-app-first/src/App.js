import { useState, useEffect } from "react";

function App() {
  const [listItem, setListItem] = useState(localStorage.getItem("listbaru") ? JSON.parse(localStorage.getItem("listbaru")) : []);

  // Fungsi untuk menghapus item berdasarkan id
  function handleDeleteNote(id) {
    setListItem(listItem.filter(item => item.id !== id));
  }

  // Fungsi untuk mengubah status 'done' pada item
  function handleToggleDone(id) {
    setListItem(
      listItem.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  }

  useEffect(() => {
    localStorage.setItem("listbaru", JSON.stringify(listItem));
  }, [listItem]);

  return (
    <>
      <div className="app">
        <Logo />
        <Form setListItem={setListItem} />
        <CheckList
          listItem={listItem}
          handleDeleteNote={handleDeleteNote}
          handleToggleDone={handleToggleDone}
        />
        <Stats />
      </div>
    </>
  );
}





function Form({ setListItem }) {
  const [title, setTitle] = useState("");

  function handleInputChange(e) {
    setTitle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() !== "") {
      const newItem = {
        id: Date.now(),
        title: title,
        done: false,
      };
      setListItem((prevList) => [...prevList, newItem]);
      setTitle(""); // Mengosongkan input setelah submit
    }
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau kamu catat?</h3>
      <input
        type="text"
        name="title"
        placeholder="tulis disini"
        value={title}
        onChange={handleInputChange}
        // value dan onChange di sini digunakan untuk mengupdate state title
        // saat user mengetikkan sesuatu di input
      />
      <button>Add</button>
    </form>
  );
}


function CheckList({ listItem, handleDeleteNote, handleToggleDone }) {
  return (
    <div className="list">
      <ul>
        {listItem.map((item) => (
          <Item
            key={item.id}
            item={item}
            handleDeleteNote={handleDeleteNote}
            handleToggleDone={handleToggleDone}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, handleDeleteNote, handleToggleDone }) {
  return (
    <li key={item.id}>
      <input
        type="checkbox"
        checked={item.done} // Menyimpan status checkbox sesuai dengan item.done
        onChange={() => handleToggleDone(item.id)} // Menangani perubahan status 'done'
      />

      <span
        style={{ textDecoration: item.done ? "line-through" : "none" }}
      >
        {item.title}
      </span>

      <button onClick={() => handleDeleteNote(item.id)}>❌</button>
    </li>
  );
}



function Logo() {
  return <span className="logo">⛱️GoList</span>;
}


function Stats() {
  return (
    <footer className="stats">
      <span>catatann progress kamu</span>
    </footer>
  );
}

export default App;
