import Item from "./Item";
import { useState } from "react";

function CheckList({ listItem, handleDeleteNote, handleToggleDone, handleClearAllItems }) {

const [sortBy, setSortBy] = useState("input");

function sortItems(){
    switch (sortBy) {
    case "title" :
        return listItem.slice().sort((a, b) => a.title.localeCompare(b.title));
    case "status" :
        return listItem.slice().sort((a, b) => Number(a.done) - Number(b.done) );
    case "input" :
    default:
        return listItem;
    }
}

const sortedItems = sortItems();

return (
    <div className="list">
    <ul>
        {/* {listItem.map((item) => (
        <Item
            key={item.id}
            item={item}
            handleDeleteNote={handleDeleteNote}
            handleToggleDone={handleToggleDone}
        />
        ))} */}

        {sortedItems.map((item) => (
        <Item
            key={item.id}
            item={item}
            handleDeleteNote={handleDeleteNote}
            handleToggleDone={handleToggleDone}
        />
        ))}
    </ul>

    <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="input">Urutan berdasarkan Input</option>
        <option value="title">Urutan berdasarkan Judul</option>
        <option value="status">Urutan berdasarkan Status</option>
        </select>

        <button onClick={handleClearAllItems}>Clear All Items</button>
    </div>
    </div>
);
}

export default CheckList;