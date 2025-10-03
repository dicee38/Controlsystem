import { Link } from "react-router-dom";

export default function Navbar({ token, onLogout }) {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">ControlSystem</Link>
      <div className="space-x-4">
        {!token ? (
          <>
            <Link to="/login" className="hover:underline">Вход</Link>
            <Link to="/register" className="hover:underline">Регистрация</Link>
          </>
        ) : (
          <button onClick={onLogout} className="hover:underline">Выйти</button>
        )}
      </div>
    </nav>
  );
}
