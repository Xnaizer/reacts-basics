import React from "react";

function Header({ user, onLogout, onShowLogin, onShowSignup }) {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">My App</h1>
      <div>
        {user ? (
          <div className="flex items-center space-x-4">
            <button
              onClick={onLogout}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              Logout
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Profile
            </button>
          </div>
        ) : (
          <div className="flex space-x-4">
            <button
              onClick={onShowLogin}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Login
            </button>
            <button
              onClick={onShowSignup}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              Signup
            </button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
