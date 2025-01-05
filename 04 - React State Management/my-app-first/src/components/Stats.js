
function Stats({listItem}) {

if (listItem.length === 0) {
    return (
    <footer className="stats">
        <span>Let's add something!</span>
    </footer>
    )
}



const itemsToDo = listItem.filter(item => !item.done).length;
const precetage = Math.round(( listItem.filter(item => item.done).length / listItem.length ) * 100);

return (
    <footer className="stats">
    {/* <span>You have {itemsToDo} things to do, {precetage}% done!</span> */}
    <span>{precetage === 100 ? `You have completed everything you have to do!` : `You have ${itemsToDo} things to do, ${precetage}% done!` }
    </span>

    </footer>
);
}

export default Stats;