import { useState, useEffect } from "react";
import Logo from "./components/Logo";
import Stats from "./components/Stats";
import Form from "./components/Form";

import CheckList from "./components/CheckList";

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


  function handleClearAllItems(){
    
    const confirmClear = window.confirm("Are you sure you want to clear all items?");

    if (confirmClear) {
      setListItem([]);
    }
  }
    
  

  return (
    <>
      <div className="app">
        <Logo />
        <Form setListItem={setListItem} />
        <CheckList
          listItem={listItem}
          handleDeleteNote={handleDeleteNote}
          handleToggleDone={handleToggleDone}
          handleClearAllItems={handleClearAllItems}
        />
        <Stats listItem={listItem} setListItem={setListItem}/>
      </div>
    </>
  );
}


















export default App;
