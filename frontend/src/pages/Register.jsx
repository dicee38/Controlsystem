import { useState } from "react";
import { api } from "../utils/api.js";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("engineer");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const res = await api.register(email, password, role);
    if (res.message === "User registered successfully") {
      navigate("/login");
    } else {
      alert(res.message || "Registration failed");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-blue-100">
      <form onSubmit={handleRegister} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl mb-4">Register</h2>
        <input type="email" placeholder="Email"
          value={email} onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-2 border p-2 rounded" />
        <input type="password" placeholder="Password"
          value={password} onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-2 border p-2 rounded" />
        <select value={role} onChange={(e) => setRole(e.target.value)}
          className="w-full mb-2 border p-2 rounded">
          <option value="engineer">Engineer</option>
          <option value="manager">Manager</option>
          <option value="observer">Observer</option>
        </select>
        <button className="bg-blue-600 text-white w-full py-2 rounded">Register</button>
        <p className="mt-2 text-sm">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </form>
    </div>
  );
}
