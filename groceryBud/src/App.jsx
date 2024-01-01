import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-pink-50 flex justify-center w-screen h-screen">
      <div className="text-center bg-gray-50 h-min m-32 shadow-md rounded-md p-4 py-6">
        <h1 className="font-medium text-2xl mb-4">Grocery Bud</h1>
        <div className="flex items-center">
          <input
            type="text"
            className="p-1 w-[20rem] rounded-l-md border border-gray-300 border-r-0"
          />
          <button className="btn bg-sky-500 font-medium p-0 rounded-r-md font-serif border-none px-3 min-h-0 h-[2.1rem] rounded-none ">
            Add Item
          </button>
        </div>
      </div>
      <TodoList></TodoList>
    </div>
  );
}

export default App;
