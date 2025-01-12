import WatchedItem from "./WatchedItem";


function WatchedList({watched, handleDeleteWatched}) {


return (
    <ul className="list-none p-2 overflow-hidden">
            {watched.map((movie, index) => (
                <WatchedItem 
                key={movie.imdbID} 
                movie={movie} 
                handleDeleteWatched={handleDeleteWatched} 
                />
            ))}
    </ul>
);
}

export default WatchedList;