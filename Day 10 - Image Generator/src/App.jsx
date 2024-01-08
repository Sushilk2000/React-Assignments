import "./App.css";
import Header from "./Header";
import ImageGenerator from "./ImageGenerator";
import { useState } from "react";
function App() {
  const [picture, setPicture] = useState("");
  return (
    <>
      <Header></Header>
      <ImageGenerator setPicture={setPicture}></ImageGenerator>
      <div className="h-[50vh] flex justify-center items-center mt-8">
        <img src={picture} alt="" className="h-full rounded-md" />
      </div>
    </>
  );
}

export default App;
