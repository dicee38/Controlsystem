import { useState } from "react";
import { register } from "../utils/api";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(form);
    setMessage(res.message || "Регистрация завершена!");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-600">Регистрация</h1>
      {message && <p className="text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Имя"
          className="w-full p-2 border rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Пароль"
          className="w-full p-2 border rounded"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}
