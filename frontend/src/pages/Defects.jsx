import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import Navbar from "../components/Navbar.jsx";

export default function Defects() {
  const [defects, setDefects] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    api.getDefects().then(setDefects);
  }, []);

  const create = async () => {
    const d = await api.createDefect({ title, description: desc });
    setDefects([...defects, d]);
    setTitle("");
    setDesc("");
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl mb-4">Defects</h2>
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title"
          className="border p-2 mr-2 rounded" />
        <input value={desc} onChange={(e) => setDesc(e.target.value)} placeholder="Description"
          className="border p-2 mr-2 rounded" />
        <button onClick={create} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>

        <ul className="mt-4">
          {defects.map(d => (
            <li key={d.id}>{d.title} - {d.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
