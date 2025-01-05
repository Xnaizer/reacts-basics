import MovieList from "./components/MovieList"
import Nav from "./components/Nav"
import { MovieProvider } from "./context/MovieContext"
import AddMovie from "./components/AddMovie"

function App() {
  return (
    <>
      <MovieProvider>
        <Nav />
        <AddMovie />
        <MovieList />
      </MovieProvider>
    </>
  )
}

export default App
