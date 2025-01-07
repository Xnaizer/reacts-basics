

function WatchedItem({movie}) {
    return (
        <li
        key={movie.imdbID}
        className="relative grid grid-cols-[4rem,1fr] gap-6 items-center p-6 border-b border-background-100"
        >
        <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-full row-span-full"
        />
        <div>
        <h3 className="text-lg">{movie.Title}</h3>
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
        </div>
        </div>
    </li>
    );
}

export default WatchedItem;