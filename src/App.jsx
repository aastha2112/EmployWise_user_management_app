import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Login from "./pages/Login";
import UsersList from "./pages/UsersList";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserList from "./pages/UsersList";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <Provider store={store}>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} />
        <Routes>
          <Route
            path="/users"
            element={token ? <UserList /> : <Navigate to="/" />}
          />{" "}
          <Route path="/" element={<Login />} />
          <Route path="/users" element={<UsersList />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
