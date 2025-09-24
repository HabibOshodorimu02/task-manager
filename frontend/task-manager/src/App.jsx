// src/App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  Link,
} from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard.jsx";
import Login from "./pages/Auth/Login.jsx";
import SignUp from "./pages/Auth/SignUp.jsx";
import CreateTask from "./pages/Admin/CreateTask.jsx";
import ManageTasks from "./pages/Admin/ManageTasks.jsx";
import ManageUsers from "./pages/Admin/ManageUsers.jsx";
import UserDashboard from "./pages/User/UserDashboard.jsx";
import MyTasks from "./pages/User/MyTasks.jsx";
import ViewTaskDetails from "./pages/User/ViewTaskDetails.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";

const App = function () {
  console.log("App component is rendering");

  return (
    <Router>
      {/* Debug navigation bar - remove this later */}
      <div
        style={{
          backgroundColor: "#f0f0f0",
          padding: "10px",
          borderBottom: "1px solid #ccc",
        }}
      >
        <strong>Debug Navigation:</strong>
        <Link to="/login" style={{ margin: "0 10px", color: "blue" }}>
          Login
        </Link>
        <Link to="/signup" style={{ margin: "0 10px", color: "blue" }}>
          SignUp
        </Link>
        <Link to="/admin/dashboard" style={{ margin: "0 10px", color: "blue" }}>
          Admin Dashboard
        </Link>
        <Link to="/user/dashboard" style={{ margin: "0 10px", color: "blue" }}>
          User Dashboard
        </Link>
      </div>

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Admin Routes */}
        <Route element={<PrivateRoute allowedRoles={["admin"]} />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/tasks" element={<ManageTasks />} />
          <Route path="/admin/create-task" element={<CreateTask />} />
          <Route path="/admin/users" element={<ManageUsers />} />
        </Route>

        {/* User Routes */}
        <Route element={<PrivateRoute allowedRoles={["user"]} />}>
          <Route path="/user/dashboard" element={<UserDashboard />} />
          <Route path="/user/tasks" element={<MyTasks />} />
          <Route path="/user/task-details/:id" element={<ViewTaskDetails />} />
        </Route>

        {/* Catch all route */}
        <Route
          path="*"
          element={
            <div style={{ padding: "20px" }}>
              <h1>404 - Page Not Found</h1>
              <p>The page you're looking for doesn't exist.</p>
              <Link to="/login">Go to Login</Link>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
