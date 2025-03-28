import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditUserForm from "./EditUserForm.jsx";
import { deleteUser, fetchUsers } from "../redux/usersSlice.js";

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state.users);
  const [editingUser, setEditingUser] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [dispatch, page]);

  if (loading)
    return (
      <p className="text-center text-lg font-semibold text-gray-400">
        Loading users...
      </p>
    );

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      {/* Navbar */}
      <Navbar />

      <div className="p-5 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-200">
          User List
        </h1>

        {/* User Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 border border-gray-700"
            >
              <img
                src={user.avatar}
                alt={user.first_name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-2 border-gray-600"
              />
              <h2 className="text-xl font-semibold text-center text-gray-200">
                {user.first_name} {user.last_name}
              </h2>
              <p className="text-sm text-gray-400 text-center">{user.email}</p>
              <div className="mt-4 flex justify-center gap-3">
                <button
                  onClick={() => setEditingUser(user)}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg transition shadow"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition shadow"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 gap-4">
          <button
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
            className={`px-5 py-2 rounded-lg font-medium ${
              page === 1
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white transition"
            }`}
          >
            Previous
          </button>
          <span className="text-lg font-medium text-gray-300">Page {page}</span>
          <button
            onClick={() => setPage((prev) => prev + 1)}
            disabled={users.length < 6} // Assuming 6 users per page
            className={`px-5 py-2 rounded-lg font-medium ${
              users.length < 6
                ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600 text-white transition"
            }`}
          >
            Next
          </button>
        </div>

        {/* Edit Form */}
        {editingUser && (
          <EditUserForm
            user={editingUser}
            onClose={() => setEditingUser(null)}
          />
        )}
      </div>
    </div>
  );
};

export default UserList;
