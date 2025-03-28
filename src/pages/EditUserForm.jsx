import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/usersSlice";

const EditUserForm = ({ user, onClose }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateUser({ id: user.id, ...formData }));
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-gray-900 p-6 rounded-lg w-96 shadow-xl border border-gray-700 text-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Edit User</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-3">
            <input
              type="text"
              name="first_name"
              value={formData.first_name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="First Name"
            />
            <input
              type="text"
              name="last_name"
              value={formData.last_name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Last Name"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-between mt-5">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition font-medium"
            >
              Save
            </button>
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-700 hover:bg-gray-600 text-white px-5 py-2 rounded-lg transition font-medium"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUserForm;
