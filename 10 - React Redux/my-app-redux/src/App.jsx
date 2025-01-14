import MovieInput from "./components/MovieInput";
import MovieList from "./components/MovieList";

const App = () => {
    return (
        <div className="app">
            <h1>Redux CRUD App</h1>
            <MovieInput />
            <MovieList />
        </div>
    );
};

export default App;