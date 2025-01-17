import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  users: [], 
  editingUser: null,
  isAuthenticated: false,
  currentUser: null, // Menyimpan pengguna yang sedang login
  accounts: [], // Menyimpan daftar akun dengan role
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    updateUser: (state, action) => {
      const index = state.users.findIndex((user) => user.id === action.payload.id);
      if (index !== -1) {
        state.users[index] = action.payload;
      }
    },
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
    setEditingUser: (state, action) => {
      state.editingUser = action.payload;
    },
    clearEditingUser: (state) => {
      state.editingUser = null;
    },
    createAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    login: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload; // Simpan pengguna yang sedang login
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null; // Reset pengguna saat logout
    },
  },
});

export const {
  setUsers,
  addUser,
  updateUser,
  deleteUser,
  setEditingUser,
  clearEditingUser,
  createAccount,
  login,
  logout,
} = userSlice.actions;

export default userSlice.reducer;
