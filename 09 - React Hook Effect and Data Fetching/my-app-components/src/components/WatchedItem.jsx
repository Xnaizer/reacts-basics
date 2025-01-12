

function WatchedItem({movie, handleDeleteWatched}) {
    return (
        <li
        key={movie.imdbid}
        className="relative grid grid-cols-[4rem,1fr] gap-6 items-center p-6 border-b border-background-100"
        >
        <img
        src={movie.poster}
        alt={`${movie.title} poster`}
        className="w-full row-span-full"
        />
        <div>
        <h3 className="text-lg">{movie.title}</h3>
        <div className="flex items-center gap-6">
            <p className="flex items-center gap-2 text-sm text-text-dark">
            <span>🎬</span>
            <span>{movie.imdbRating}</span>
            </p>
            <p className="flex items-center gap-2 text-sm text-text-dark">
            <span>🌟</span>
            <span>{movie.userRating}</span>
            </p>
            <p className="flex items-center gap-2 text-sm text-text-dark">
            <span>⏳</span>
            <span>{movie.runtime} min</span>
            </p>
           
            <button
                className="absolute top-2 right-2 h-6 w-6 rounded-full bg-background-900 text-text text-sm font-bold cursor-pointer z-50"
                onClick={() => handleDeleteWatched(movie.imdbID)}
            >
                X
            </button>
            
        </div>
        </div>
    </li>
    );
}

export default WatchedItem;