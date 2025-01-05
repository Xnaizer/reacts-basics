import { useState } from "react";

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

export default Form;