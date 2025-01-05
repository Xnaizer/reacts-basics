

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

export default Item;