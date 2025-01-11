import MovieItem from "./MovieItem";

function MovieList({movies}) {
  

  return (
  
    <ul className="list-none p-2 overflow-hidden">
        {movies.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} />
        ))}
    </ul>
    
  );
}

export default MovieList;