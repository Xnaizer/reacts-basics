import MovieItem from "./MovieItem";

function MovieList({movies,handleSelectedMovieId}) {
  

  return (
  
    <ul className="list-none p-2 overflow-hidden">
        {movies.map((movie) => (
            <MovieItem key={movie.imdbID} movie={movie} handleSelectedMovieId={handleSelectedMovieId}/>
        ))}
    </ul>
    
  );
}


export default MovieList;