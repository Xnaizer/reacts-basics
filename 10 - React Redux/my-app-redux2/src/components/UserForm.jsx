import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, updateUser, clearEditingUser } from '../redux/features/userSlice';

const UserForm = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const editingUser = useSelector((state) => state.user.editingUser);
  const dispatch = useDispatch();

  // Efek untuk mengisi form jika sedang mengedit user
  useEffect(() => {
    if (editingUser) {
      setName(editingUser.name);
      setUsername(editingUser.username);
      setEmail(editingUser.email);
    } else {
      // Kosongkan form jika tidak dalam mode edit
      setName('');
      setUsername('');
      setEmail('');
    }
  }, [editingUser]);

  const handleSave = () => {
    if (!name || !username || !email) {
      alert('All fields are required!');
      return;
    }

    if (editingUser) {
      // Update user
      dispatch(updateUser({ id: editingUser.id, name, username, email }));
    } else {
      // Add user baru
      const newUser = {
        id: Math.random(),
        name,
        username,
        email,
      };
      dispatch(addUser(newUser));
    }

    // Kosongkan input setelah menambahkan/memperbarui
    setName('');
    setUsername('');
    setEmail('');
    dispatch(clearEditingUser());
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSave();
      }}
      className="w-full max-w-md bg-white shadow-md rounded-lg p-6 mb-6"
    >
      <h1 className="text-lg font-semibold mb-4 text-center">
        {editingUser ? 'Edit User' : 'Add User'}
      </h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200"
        >
          {editingUser ? 'Update' : 'Add'}
        </button>
        {editingUser && (
          <button
            type="button"
            onClick={() => {
              setName('');
              setUsername('');
              setEmail('');
              dispatch(clearEditingUser());
            }}
            className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default UserForm;
