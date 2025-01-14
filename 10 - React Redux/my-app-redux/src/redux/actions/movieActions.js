export const addMovie = (movie) => ({
    type: "ADD_MOVIE", // Jenis aksi
    payload: movie, // Data tambahan yang dibutuhkan (judul film)
});

export const removeMovie = (id) => ({
    type: "REMOVE_MOVIE",
    payload: id,
});
