import { useEffect, useState } from "react";
import { api } from "../utils/api.js";
import Navbar from "../components/Navbar.jsx";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    api.getProjects().then(setProjects);
  }, []);

  const create = async () => {
    const p = await api.createProject({ name, description });
    setProjects([...projects, p]);
    setName("");
    setDescription("");
  };

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h2 className="text-2xl mb-4">Projects</h2>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Name"
          className="border p-2 mr-2 rounded" />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description"
          className="border p-2 mr-2 rounded" />
        <button onClick={create} className="bg-blue-600 text-white px-4 py-2 rounded">Add</button>

        <ul className="mt-4">
          {projects.map(p => (
            <li key={p.id}>{p.name} - {p.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
