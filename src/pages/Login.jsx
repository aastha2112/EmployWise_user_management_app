import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../redux/authSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [email, setEmail] = useState("eve.holt@reqres.in");
  const [password, setPassword] = useState("cityslicka");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error } = useSelector((state) => state.auth);

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await dispatch(loginUser({ email, password }));
    if (result.meta.requestStatus === "fulfilled") {
      toast.success("Login Successful!");
      navigate("/users");
    } else {
      toast.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900">
      <ToastContainer />
      <form
        onSubmit={handleLogin}
        className="bg-gray-800 p-8 rounded-xl shadow-lg w-full max-w-md border border-gray-700"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-white">
          Welcome Back
        </h2>

        <div className="mb-4">
          <label className="block text-gray-400 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-400 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-gray-700 text-white p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white p-3 rounded-lg font-semibold shadow-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
