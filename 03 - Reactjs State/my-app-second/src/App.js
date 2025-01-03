import { useState } from "react";

const listItem = [
  {id : 1, title: "eat", done: false},
  {id : 2, title: "sleep", done: true}
]

function App() {
  return (
    <>
      <div className="app">
        <Logo />
        <Form />
        <CheckList />
        <Stats />
      </div>
      
      
    </>
      
  );
}

function Logo() {
  return <span className="logo">⛱️GoList </span>

}

function Form(){

  const [title, setTitle] = useState(""); 

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Ada yang mau kamu catat?</h3>
      <input type="text" nama="title" id="" placeholder="tulis disini" value={title} onChange={(e) => setTitle(e.target.value)}/>
      <button>add</button>

    </form>
  )
}

function CheckList() {
  return (
    <div className="list"> 
      <ul>
        {listItem.map((item) => (
          <Item key={item.id} item={item} />
        ))}



      </ul>
    </div>
  )
}


function Item ({item}) {
  return (
    
    <li key={item.id}>
      <input type="checkbox" />
      <span style={{textDecoration: item.done ? "line-through" : "none"}}>{item.title}</span>
      <button>❌</button>
    </li>

        
  )
}




function Stats() {
  return (
    <footer className="stats">
      <span>catatann progress kamu</span>
    </footer>
  )
}



export default App;
 