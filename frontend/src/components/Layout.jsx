import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white flex flex-col">
        <h1 className="text-2xl font-bold p-4">ControlSystem</h1>
        <nav className="flex-1">
          <ul>
            <li className="p-3 hover:bg-secondary">
              <Link to="/dashboard">📊 Dashboard</Link>
            </li>
            <li className="p-3 hover:bg-secondary">
              <Link to="/projects">🏗 Projects</Link>
            </li>
            <li className="p-3 hover:bg-secondary">
              <Link to="/defects">⚠️ Defects</Link>
            </li>
            <li className="p-3 hover:bg-secondary">
              <Link to="/reports">📑 Reports</Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6 bg-white overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
