import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/features/userSlice';
import UserForm from './UserForm';
import UserTable from './UserTable';
import Login from './Login';
import CreateAccount from './CreateAccount';

const UserManagement = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const currentUser = useSelector((state) => state.user.currentUser); // Ambil data pengguna yang sedang login
  const dispatch = useDispatch();

  if (!isAuthenticated) {
    if (showCreateAccount) {
      return <CreateAccount onSwitchToLogin={() => setShowCreateAccount(false)} />;
    }
    return <Login onSwitchToCreateAccount={() => setShowCreateAccount(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 relative">
      {/* Tombol Logout */}
      <button
        onClick={() => dispatch(logout())}
        className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-md"
      >
        Logout
      </button>

      <h1 className="text-2xl font-bold mb-6 text-center">User Management (CRUD)</h1>

      {currentUser.role === 'admin' ? (
        <>
          <UserForm />
          <UserTable />
        </>
      ) : (
        <p>You do not have permission to access this page.</p>
      )}
    </div>
  );
};

export default UserManagement;
