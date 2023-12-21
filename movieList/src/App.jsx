import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import MovieComp from "./movieComp";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black">
      <div className="flex justify-center font-semibold text-6xl mb-8 bg-gray-600 text-white  sticky top-0">
        <h1>Movie List</h1>
      </div>
      <MovieComp></MovieComp>
    </div>
  );
}

export default App;
