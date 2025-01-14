
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../redux/actions/movieActions";

const MovieInput = () => {
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAddMovie = () => {
        if (title.trim()) {
            dispatch(addMovie(title));
            setTitle("");
        }
    };

    return (
        <div className="movie-input">
            <input
                type="text"
                placeholder="Add a movie"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAddMovie}>Add Movie</button>
        </div>
    );
};

export default MovieInput;
