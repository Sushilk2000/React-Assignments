import Inputs from "./Inputs";
import "./App.css";
const App = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-12 pt-[8rem] bg-pink-50">
      <h1 className="mb-8 text-3xl font-bold text-center text-blue-700">
        Password Generator
      </h1>
      <Inputs />
    </div>
  );
};

export default App;
