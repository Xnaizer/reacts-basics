import { useEffect,useState } from "react";
import StarRating from "./StarRating";
import Loader from "./Loader";
import { use } from "react";

function MovieDetails({ selectedMovieId, handleCloseMovieDetails, API_KEY, handleAddWatched, watched }) {
    const [movie, setMovie] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [userRating, setUserRating] = useState(0);

    const isWatched = watched.some((movie) => movie.imdbID === selectedMovieId);
    const userRatingWatched = watched.find((movie) => movie.imdbID === selectedMovieId)?.userRating;

    const {
        Title: title,
        Poster: poster,
        Runtime: runtime,
        Genre: genre,
        Plot: plot,
        imdbRating,
        Actors: actors,
        Director: director,
        Released: released,
        imdbID,
        Year: year
        
        
    } = movie;

    useEffect(() => {
        async function fetchMovieDetails() {
            setIsLoading(true);
            const res = await fetch(
                `http://www.omdbapi.com/?i=${selectedMovieId}&apikey=${API_KEY}`
            );
            const data = await res.json();
            setMovie(data);
            setIsLoading(false);
        }

        fetchMovieDetails();
    }, [selectedMovieId]);

    function handleAddWatchedNew(){
        const newWatchedMovie = {
            imdbID: selectedMovieId,
            title,
            year,
            poster,
            imdbRating: Number(imdbRating),
            runtime: Number(runtime.split(" ").at(0)),
            userRating: Number(userRating),
           
        }
        handleAddWatched(newWatchedMovie);
        handleCloseMovieDetails();
    }

    // function handleAlertButtonWatched(){
    //     alert("You Have To Rate The Movie First");
    // }

    useEffect(() => {
        if(!title) return;
        document.title = `${title} - Movie's`;

        return () => {
            document.title = "Movie's App";
        }
    }, [title]);

    return (
        <>
            {isLoading ? <Loader /> :
            <>
            <div className="bg-gray-800 text-white  p-6 rounded-lg shadow-md w-[550px] mx-auto mt-12">
            <button
                onClick={handleCloseMovieDetails}
                className="text-sm font-semibold text-red-500 hover:text-red  mb-8"
            >
                ❌ Close Tab
            </button>
            <header className="flex flex-col items-center  mb-4">
                
                {poster && (
                    <img
                    src={poster}
                    alt={`${title} poster`}
                    className="w-[40%] rounded-md mb-4"
                    />
                )}
                <h2 className="text-xl font-bold">{title}</h2>
            </header>

            <div className=" w-full flex items-center justify-between pl-8 pr-8 mt-4 mb-6">
                <p>
                    <span className="font-semibold">📆</span> {released}
                </p>
                <p>
                    <span className="font-semibold">⌛</span> {runtime}
                </p>
                <p>
                    <span className="font-semibold">🌟</span> {`${imdbRating}/10`}
                </p>
            </div>

            <div className="text-sm space-y-2 mt-5">
                
                
                <p>
                    <span className="font-semibold">Genre:</span> {genre}
                </p>
                <p>
                    <span className="font-semibold">Plot:</span> {plot}
                </p>
                
                <p>
                    <span className="font-semibold">Actors:</span> {actors}
                </p>
                <p>
                    <span className="font-semibold">Director:</span> {director}
                </p>
            </div>
            <div className="text-sm space-y-2 mt-5 bg-gray-700 pt-4 rounded-md pl-4 pr-4 justify-center flex flex-col pb-4">
                
                {!isWatched ? (
                    <>
                        <span>Rate This Movies</span>
                        <StarRating max={10} size={20} onSetRating={setUserRating} />
                        {userRating > 0 ? (
                            <button 
                            className="w-full bg-blue-700  rounded-xl py-2 mt-4  "
                            onClick={handleAddWatchedNew}
                            >+ Add to Wacthed List</button>
                        ) : (
                            <>
                            <span className="text-red">*You Have To Rate The Movie First</span>
                            <button disabled className="w-full bg-blue-900 rounded-xl py-2 mt-4  " >+ Add to Wacthed List</button>
                            </>
                        )}

                        
                    </>
                ):(
                    <p> You already watched this movie with a rating of {userRatingWatched} / 10</p>
                )}
                
            </div>

        </div>
            </> 
            }
        </>
    );
}


export default MovieDetails;