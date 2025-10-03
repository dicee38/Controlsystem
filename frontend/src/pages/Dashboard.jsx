import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import Navbar from "../components/Navbar.jsx";

export default function Dashboard() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    api.getReports().then(setReports);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl mb-4">Dashboard</h2>
        <ul>
          {reports.map((r, i) => (
            <li key={i}>{r.status}: {r.count}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
