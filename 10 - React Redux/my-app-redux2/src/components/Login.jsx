import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/features/userSlice';

const Login = ({ onSwitchToCreateAccount }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const accounts = useSelector((state) => state.user.accounts); // Ambil daftar akun
  const dispatch = useDispatch();

  const handleLogin = () => {
    const account = accounts.find(
      (acc) => acc.username === username && acc.password === password
    );

    if (account) {
      dispatch(login(account)); // Kirim data pengguna yang login
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm bg-white shadow-md rounded-lg p-6">
        <h1 className="text-xl font-bold mb-4 text-center">Login</h1>
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
        <button
          onClick={handleLogin}
          className="bg-blue-500 text-white px-4 py-2 rounded-md w-full"
        >
          Login
        </button>
        <p
          className="mt-4 text-center text-blue-500 cursor-pointer"
          onClick={onSwitchToCreateAccount}
        >
          Create an Account
        </p>
      </div>
    </div>
  );
};

export default Login;
