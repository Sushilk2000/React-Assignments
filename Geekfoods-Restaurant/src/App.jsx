import { useState } from "react";

import "./App.css";
import Restaurants from "./Restaurants";
import Header from "./header";
import Footer from "./footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Restaurants></Restaurants>
      <Footer></Footer>
    </>
  );
}

export default App;
