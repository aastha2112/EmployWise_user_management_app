import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // Redirect to login
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800 p-4 flex justify-between items-center shadow-lg">
      <h1 className="text-white text-2xl font-bold tracking-wide">
        User Dashboard
      </h1>
      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-500 text-white px-5 py-2 rounded-lg transition font-medium shadow-md hover:shadow-lg"
      >
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
