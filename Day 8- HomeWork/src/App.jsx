import ProgressBar from "./progress";
import { useEffect, useState } from "react";
import "./App.css";
const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) {
      return;
    }

    const id = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress === 100) {
          clearInterval(id);
          return prevProgress;
        }

        return prevProgress + 0.1;
      });
    }, 5);

    return () => clearInterval(id);
  }, [progress]);

  return (
    <div className="grid place-content-center h-screen">
      <h1 className="text-center font-medium text-4xl mb-8">Progress Bar</h1>
      <ProgressBar progress={progress} />
      <p className="text-center mb-4 ">
        {progress <= 100
          ? `Progress: ${progress.toFixed(0)}%`
          : "Loading Complete!"}
      </p>
      <button
        className="btn btn-secondary w-2/5 mx-auto"
        onClick={() => setProgress(0)}
        type="button"
      >
        Reset
      </button>
    </div>
  );
};

export default App;
