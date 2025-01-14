import React, { useState } from "react";

function PostForm({ onAddPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && content) {
      onAddPost({ title, content });
      setTitle("");
      setContent("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg p-6 rounded-md w-full max-w-lg mx-auto"
    >
      <h2 className="text-xl font-bold mb-4">Add New Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full mb-4 p-2 border rounded"
        rows="4"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Add Post
      </button>
    </form>
  );
}

export default PostForm;
