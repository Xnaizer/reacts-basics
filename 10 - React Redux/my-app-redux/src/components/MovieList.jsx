
import { useSelector, useDispatch } from "react-redux";
import { removeMovie } from "../redux/actions/movieActions";

const MovieList = () => {
    const movies = useSelector((state) => state.movieApp.movies);
    const dispatch = useDispatch();

    return (
        <div className="movie-list">
            <h2>Movie List</h2>
            <ul>
                {movies.map((movie) => (
                    <li key={movie.id}>
                        {movie.title}
                        <button onClick={() => dispatch(removeMovie(movie.id))}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MovieList;
