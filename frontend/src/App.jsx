import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl text-blue-600 font-bold">React + Vite</h1>
      <p className="mt-4">Счётчик: {count}</p>
      <button 
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
        onClick={() => setCount(count + 1)}
      >
        Увеличить
      </button>
    </div>
  );
}

export default App;
