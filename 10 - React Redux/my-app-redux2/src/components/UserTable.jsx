
import { useSelector, useDispatch } from 'react-redux';
import { setEditingUser, deleteUser } from '../redux/features/userSlice';

const UserTable = () => {
  const users = useSelector((state) => state.user.users);
  const dispatch = useDispatch();

  return (
    <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6">
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-blue-500 text-white">
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Username</th>
            <th className="border px-4 py-2">Email</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id || user.username}>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.username}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                <div className="flex justify-center space-x-2">
                  <button
                    onClick={() => dispatch(setEditingUser(user))}
                    className="bg-slate-500 text-white px-3 py-1 rounded-md"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteUser(user.id))}
                    className="bg-red-500 text-white px-3 py-1 rounded-md"
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
  );
};

export default UserTable;
