const initialState = {
    movies: [
        { id: 1, title: "The Shawshank Redemption" },
        { id: 2, title: "The Godfather" },
    ],
};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_MOVIE":
            return {
                ...state,
                movies: [
                    ...state.movies,
                    { id: state.movies.length + 1, title: action.payload },
                ],
            };
        case "REMOVE_MOVIE":
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.payload),
            };
        default:
            return state;
    }
};

export default movieReducer;
