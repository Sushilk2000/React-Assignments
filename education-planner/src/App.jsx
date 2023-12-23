import { useState } from "react";
import "./App.css";
import Inputs from "./Inputs";
import Planner from "./Planner";
function App() {
  const [planner, setPlanner] = useState(false);
  return (
    <>
      <div className="m-16 text-center">
        <h1 className="font-bold text-4xl">Subject Planner</h1>
        <Inputs setPlanner={setPlanner} />
        <Planner setPlanner={setPlanner} />
      </div>
    </>
  );
}

export default App;
