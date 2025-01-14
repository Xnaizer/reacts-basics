import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./reducers/movieReducer";

export const store = configureStore({
    reducer: {
        movieApp: movieReducer,
    },
});

export default store;

// reducer sebuah fungsi dalam Redux yang bertanggung jawab untuk menentukan bagaimana state aplikasi berubah sebagai respon terhadap sebuah action.