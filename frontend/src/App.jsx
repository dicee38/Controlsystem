import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";

export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const handleLogin = (jwt) => {
    localStorage.setItem("token", jwt);
    setToken(jwt);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <BrowserRouter>
      <Navbar token={token} onLogout={handleLogout} />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Navigate to={token ? "/dashboard" : "/login"} />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={token ? <Dashboard /> : <Navigate to="/login" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
