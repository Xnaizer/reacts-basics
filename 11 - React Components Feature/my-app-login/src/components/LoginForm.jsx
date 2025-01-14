import React, { useState } from "react";

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      // Kirim data login ke parent (App.jsx)
      onLogin({ email, password });
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg p-6 rounded-md w-96"
    >
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-green-500 text-white px-4 py-2 rounded w-full hover:bg-green-600"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
