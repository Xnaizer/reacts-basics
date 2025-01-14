import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        movies: [],
    },
    reducers: {
        addMovie(state, action) {
            state.movies.push({
                id: state.movies.length + 1,
                title: action.payload,
            });
        },
        removeMovie(state, action) {
            state.movies = state.movies.filter(
                (movie) => movie.id !== action.payload
            );
        },
    },
});

export const { addMovie, removeMovie } = movieSlice.actions;
export default movieSlice.reducer;
