import { useState, useContext } from "react";
import Movies from "./Movies";
// import Nav from "./Nav";

import { MovieContext } from "../context/MovieContext";

function MovieList() {
    // const [movies, setMovies] = useState([
    //     {
    //       id: 1,
    //       title: "Shazam",
    //       price: "$9.99",
    //     },
    //     {
    //       id: 2,
    //       title: "Spider Man",
    //       price: "$10.99",
    //     },
    //     {
    //       id: 3,
    //       title: "Avengers",
    //       price: "$11.99",
    //     },
    //   ]);

    // const value = useContext(MovieContext);
    const [movies, setMovies] = useContext(MovieContext);
  return (
    <>
        <h2 className="text-2xl mt-8 font-semibold text-center">Movie List</h2>
        <div className="mt-5 outline-dashed flex gap-10 p-2">
            
        {movies.map((item) => (
            <>
                {/* // return <li key={movie.id}>{movie.title}</li> */}
                <Movies title={item.title} key={item.id} price={item.price} id={item.id} />
                {/* <Nav />  // kebodohan apa ini nak ?*/}
            </>
        ))}
        </div>
    </>
  );
}

export default MovieList;
