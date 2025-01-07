import WatchedItem from "./WatchedItem";


function WatchedList({watched}) {


return (
    <ul className="list-none p-2 overflow-hidden">
            {watched.map((movie, index) => (
                <WatchedItem key={movie.imdbID} movie={movie} />
            ))}
    </ul>
);
}

export default WatchedList;