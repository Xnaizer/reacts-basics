import { useState,useContext } from "react";
import { MovieContext } from "../context/MovieContext";

function AddMovie() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [movies, setMovies] = useContext(MovieContext);

    function updateTitle(e){
        setTitle(e.target.value);
    }

    function updatePrice(e){
        setPrice(e.target.value);
    }

    function addMovies(e){
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {id: movies.length + 1, title: title, price: price}]);
        
    }

    return (
        <form className="flex justify-center mt-6 gap-4" onSubmit={addMovies}>
            <h2 className="text-xl py-2">Add A Movie :</h2>
            <input className="bg-slate-300 p-2 rounded-md placeholder:text-slate-700" type="text" placeholder="Title" value={title} onChange={updateTitle} />
            <input className="bg-slate-300 p-2 rounded-md placeholder:text-slate-700" type="text" placeholder="Price" value={price} onChange={updatePrice}/>
            <button className="bg-slate-600 text-white p-2 rounded-md text-sm" type="submit">Add Movie</button>
        </form>
    )
}

export default AddMovie;