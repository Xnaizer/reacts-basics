import { useState, useEffect } from "react";

function App() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [tableData, setTableData] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      setTableData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSave = () => {
    if (editingId) {
      const updatedTableData = tableData.map((item) =>
        item.id === editingId
          ? { ...item, name, username, email }
          : item
      );
      setTableData(updatedTableData);
    } else {
      const newUser = {
        id: tableData.length + 1,
        name,
        username,
        email,
      };
      setTableData([...tableData, newUser]);
    }

    setName("");
    setUsername("");
    setEmail("");
    setEditingId(null);
  };

  const handleEdit = (id) => {
    const user = tableData.find((item) => item.id === id);
    setName(user.name);
    setUsername(user.username);
    setEmail(user.email);
    setEditingId(id);
  };

  // Handle user delete
  const handleDelete = (id) => {
    const updatedTableData = tableData.filter((item) => item.id !== id);
    setTableData(updatedTableData);
  };

  // Handle cancel operation
  const handleCancel = () => {
    setName("");
    setUsername("");
    setEmail("");
    setEditingId(null);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6 text-center mt-6">User Management (CRUD)</h1>
      <div className="min-h-screen bg-gray-100 flex  items-center py-8">
        
        

        {/* Table Section */}
        <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-blue-500 text-white text-center ">
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Username</th>
                <th className="border border-gray-300 px-4 py-2">Email</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((user) => (
                <tr
                  key={user.id}
                  className=" "
                >
                  <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.username}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {user.email}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <div className="flex justify-center space-x-2">
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="bg-slate-500 text-white px-3 py-1 rounded-md hover:bg-slate-600 transition duration-200"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition duration-200"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>



        {/* Form Section */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSave();
          }}
          className="w-full max-w-md bg-white shadow-md rounded-lg p-6 ml-6"
        >
          <h1 className="text-lg font-semibold mb-4 text-center">Configure User</h1>
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
              {editingId ? "Update" : "Add"}
            </button>
            {editingId && (
              <button
                type="button"
                onClick={handleCancel}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition duration-200"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}

export default App;