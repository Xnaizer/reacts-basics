import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Logo from "./components/Logo";
import Search from "./components/Search";
import NumResult from "./components/NumResult"; 
import MovieList from "./components/MovieList";
import WatchedList from "./components/WatchedList";
import BoxMovies from "./components/BoxMovies";
import WatchedSummary from "./components/WatchedSummary";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

const tempMovieData = [
  {
    imdbID: "tt15398776",
    Title: "Oppenheimer",
    Year: "2013",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
  },
  {
    imdbID: "tt1517268",
    Title: "Barbie",
    Year: "2023",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
  },
  {
    imdbID: "tt8589698",
    Title: "Teenage Mutant Ninja Turtles: Mutant Mayhem",
    Year: "2023",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYzE4MTllZTktMTIyZS00Yzg1LTg1YzAtMWQwZTZkNjNkODNjXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
  },
];

const tempWatchedData = [
  {
    imdbID: "tt15398776",
    Title: "Oppenheimer",
    Year: "2013",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMDBmYTZjNjUtN2M1MS00MTQ2LTk2ODgtNzc2M2QyZGE5NTVjXkEyXkFqcGdeQXVyNzAwMjU2MTY@._V1_SX300.jpg",
    runtime: 180,
    imdbRating: 8.6,
    userRating: 10,
  },
  {
    imdbID: "tt1517268",
    Title: "Barbie",
    Year: "2023",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    runtime: 114,
    imdbRating: 7.2,
    userRating: 8,
  },
];

const average = (arr) =>
  arr.reduce((acc, cur) => acc + cur / arr.length, 0);


export default function App() {

  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(tempWatchedData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Optional: To handle and display errors

  const query = "oppenheimer";
  const API_KEY = "5b6e54cd";

  // useEffect(() => {
  //   fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=oppenheimer`)
  //   .then((res) => res.json())
  //   .then((data) => setMovies(data.Search));
  // }, []);

  useEffect(() => {
    // Define the asynchronous function inside useEffect
    async function getMovies() {
      try {
        setIsLoading(true); // Start loading
        setError(null); // Reset previous errors

        const res = await fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`
        );

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();

        if (data.Response === "False") {
          throw new Error(data.Error || "Failed to fetch movies");
        }

        setMovies(data.Search || []); // Update movies state
      } catch (error) {
        console.error("Error fetching movies:", error.message);
        setError(error.message); // Update error state
      } finally {
        setIsLoading(false); // Stop loading
      }
    }

    getMovies(); // Invoke the asynchronous function
  }, [API_KEY]);

  // const movieListContent = isLoading ? (
  //   <Loader />
  // ) : error ? (
  //   <ErrorMessage message={error} />
  // ) : (
  //   <MovieList movies={movies} />
  // );

  return (
    <>
      <NavBar>
        <Logo />
        <Search />
        <NumResult movies={movies} />
      </NavBar>

      <Main>

        {/* <BoxMovies> 
          <MovieList movies={movies} />
        </BoxMovies>

        <BoxMovies >

          
          <WatchedSummary 
          average={average}
          watched={watched}/>
          <WatchedList
          watched={watched}
          />

        </BoxMovies> */}
        {/* // ini menggunakan children yang mana di dalamnya terdapat BoxMovies, namun yang dibawah kita akan memakai element */}


        <BoxMovies>
          {isLoading && <Loader />}
          {error && <ErrorMessage message={error} />}
          {!isLoading && !error && <MovieList movies={movies} />}
        </BoxMovies>
          
        <BoxMovies>
        <WatchedSummary 
            average={average}
            watched={watched}/>
            <WatchedList
            watched={watched}
            />
        </BoxMovies>
          
          

        
        
      </Main>
      
      
    </>
  );
}
