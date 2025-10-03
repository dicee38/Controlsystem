import { useState } from "react";
import { login } from "../utils/api";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await login({ email, password });
    if (res.token) {
      onLogin(res.token);
    } else {
      setError(res.message || "Ошибка авторизации");
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Вход</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Войти
        </button>
      </form>
    </div>
  );
}
