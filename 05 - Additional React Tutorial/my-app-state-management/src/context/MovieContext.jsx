import { useState, createContext } from "react";

export const MovieContext = createContext();

export function MovieProvider(props) {

    const [movies, setMovies] = useState([
        {
          id: 1,
          title: "Shazam",
          price: "$9.99",
        },
        {
          id: 2,
          title: "Spider Man",
          price: "$10.99",
        },
        {
          id: 3,
          title: "Avengers",
          price: "$11.99",
        },
      ]);

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}

