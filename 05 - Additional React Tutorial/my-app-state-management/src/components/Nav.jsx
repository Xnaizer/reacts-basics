import { MovieContext } from "../context/MovieContext";
import { useContext } from "react";
function Nav(){
    const [movies, setMovies] = useContext(MovieContext);


  return (
    <div className="nav outline-1 py-5 pr-5 bg-slate-600 text-white pl-5 flex justify-between">
        <p>Hello Theater</p>
        <p>List Of Movies Available : {movies.length}</p>
    </div>
  )
}

export default Nav;