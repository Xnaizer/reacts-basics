
function WatchedSummary({watched, average}){
    const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
    const avgUserRating = average(watched.map((movie) => movie.userRating));
    const avgRuntime = average(watched.map((movie) => movie.runtime));

    return (
        <div className="p-8 bg-background-100 rounded-lg shadow-md">
            <h2 className="uppercase text-base mb-2">Movies you watched</h2>
            <div className="flex items-center gap-6 text-base font-semibold">
            <p className="flex items-center gap-2">
                <span>#️⃣</span>
                <span>{watched.length} movies</span>
            </p>
            <p className="flex items-center gap-2">
                <span>🎬</span>
                <span>{avgImdbRating.toFixed(1)}</span>
            </p>
            <p className="flex items-center gap-2">
                <span>🌟</span>
                <span>{avgUserRating.toFixed(1)}</span>
            </p>
            <p className="flex items-center gap-2">
                <span>⏳</span>
                <span>{avgRuntime.toFixed(0)} min</span>
            </p>
            </div>
        </div>
    );
}

export default WatchedSummary;