import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAccount } from '../redux/features/userSlice';

const CreateAccount = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role adalah "user"
  const dispatch = useDispatch();

  const handleCreateAccount = () => {
    if (!username || !password) {
      alert('Username and password are required!');
      return;
    }

    dispatch(createAccount({ username, password, role }));
    alert('Account created successfully!');
    onSwitchToLogin(); // Alihkan ke halaman login setelah akun dibuat
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4 text-center">Create Account</h1>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button
          onClick={handleCreateAccount}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        >
          Create Account
        </button>
        <p
          className="mt-4 text-center text-blue-500 cursor-pointer"
          onClick={onSwitchToLogin}
        >
          Back to Login
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
