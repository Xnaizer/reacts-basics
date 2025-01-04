import todo_icon from "../assets/todo_icon.png"
import TodoItems from "./TodoItems"
import { useEffect, useRef,useState } from "react"

function Todo  ()  {
    
    const[todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);


    const inputRef = useRef();
    function add() {
        const inputText = inputRef.current.value.trim();

        if (inputText === "") {
            return null;
        }


        const newTodo = {
            id: Date.now(),
            text: inputText,
            isCompleted: false,
        }

        setTodoList((prev) => [...prev, newTodo]);
        inputRef.current.value = "";    
    }

    function deleteTodo(id) {
        setTodoList((prev) => {
            return prev.filter((item) => item.id !== id);
        });
    }

    function toggleTodo(id){
        setTodoList((prev) => {
            return prev.map((item) => {
                if (item.id === id) {
                    return { ...item, isCompleted: !item.isCompleted };
                }
                return item;
            });
        });
    }

    useEffect(() =>{
        localStorage.setItem("todos", JSON.stringify(todoList));
        
    },[todoList])
  
  
  
    return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
            
        {/* ---------- title here ------- */}

        <div className="flex items-center mt-7 gap-2">

            <img src={todo_icon} alt="todo_icon" className="w-9" />

            <h1 className="text-3xl font-semibold">To-Do List</h1>

        </div>

        {/* ---------- input box ------- */}

        <div className="flex items-center mt-8 bg-gray-200 rounded-2xl">

            <input ref={inputRef} type="text" placeholder="Add a new task" className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600" />

            <button onClick={add} className="border-none rounded-2xl bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer">Add +</button>

        </div>

        {/* ---------- todo list ------- */}

        <div className="mt-5">
            {todoList.map((item) => {
                // return <TodoItems key={index} {text={item.text} id={item.id} isCompleted={item.isCompleted}} />

                return <TodoItems key={item.id} id={item.id} text={item.text} isCompleted={item.isCompleted} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />

            })}
        </div>

    </div>
  )
}

export default Todo