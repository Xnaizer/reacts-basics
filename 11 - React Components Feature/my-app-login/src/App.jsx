import React, { useState } from "react";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import PostForm from "./components/PostForm";

function App() {
  const [user, setUser] = useState(null); // Pengguna yang sedang login
  const [users, setUsers] = useState([]); // Daftar pengguna
  const [posts, setPosts] = useState([]); // Daftar semua post
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignupForm, setShowSignupForm] = useState(false);

  const handleLogin = (loginData) => {
    const existingUser = users.find(
      (u) => u.email === loginData.email && u.password === loginData.password
    );
    if (existingUser) {
      setUser(existingUser);
      setShowLoginForm(false);
    } else {
      alert("Invalid email or password.");
    }
  };

  const handleSignup = (signupData) => {
    setUsers((prevUsers) => [...prevUsers, signupData]);
    setUser(signupData);
    setShowSignupForm(false);
  };

  const handleLogout = () => {
    setUser(null);
  };

  const addPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, { ...newPost, userId: user.email }]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header
        user={user}
        onLogout={handleLogout}
        onShowLogin={() => setShowLoginForm(true)}
        onShowSignup={() => setShowSignupForm(true)}
      />
      <main className="p-4">
        {showLoginForm && <LoginForm onLogin={handleLogin} />}
        {showSignupForm && <SignupForm onSignup={handleSignup} />}
        {!showLoginForm && !showSignupForm && (
          <>
            {user ? (
              <PostForm onAddPost={addPost} />
            ) : (
              <p className="text-lg text-center">
                Please login to add posts.
              </p>
            )}
            <section className="mt-8">
              <h2 className="text-2xl font-bold mb-4">Posts</h2>
              {posts.length > 0 ? (
                posts.map((post, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md p-4 rounded mb-4"
                  >
                    <h3 className="font-semibold text-lg">{post.title}</h3>
                    <p>{post.content}</p>
                    <p className="text-sm text-gray-500">
                      By: {post.userId}
                    </p>
                  </div>
                ))
              ) : (
                <p>No posts yet.</p>
              )}
            </section>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
