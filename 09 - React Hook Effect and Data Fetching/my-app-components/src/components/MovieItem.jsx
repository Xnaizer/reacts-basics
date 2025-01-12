

function MovieItem({movie, handleSelectedMovieId}) {
    return (
        <li
            key={movie.imdbID}
            className="relative grid grid-cols-[4rem,1fr] gap-6 items-center p-6 border-b border-background-100 cursor-pointer transition-all duration-300 hover:bg-background-100"
            onClick={() => handleSelectedMovieId(movie.imdbID)}
        >
            <img
            src={movie.Poster}
            alt={`${movie.Title} poster`}
            className="w-full row-span-full"
            />
            <div>
            <h3 className="text-lg">{movie.Title}</h3>
            <p className="flex items-center gap-2 text-sm text-text-dark">
                <span>📅</span>
                <span>{movie.Year}</span>
            </p>
            </div>
        </li>
    );
}

export default MovieItem;