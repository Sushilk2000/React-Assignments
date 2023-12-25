import { useState } from "react";
import Sliders from "./sliders";
import ChartResult from "./Chart";
import Dropdown from "./Dropdown";

import "./App.css";

function App() {
  const [data, setData] = useState({
    homeValue: 3000,
    downPayment: 3000 * 0.2,
    loanAmount: 3000 * 0.8,
    loanTerm: 5,
    interestRate: 5,
  });
  return (
    <>
      <h1 className="text-center text-4xl font-semibold p-4 bg-blue-800 text-white">
        Bank of React
      </h1>
      <div className="flex flex-col items-center justify-center gap-8 md:gap-12 lg:gap-24 lg:flex-row bg-yellow-50 pb-20">
        <div className="flex flex-col justify-center">
          <Sliders data={data} setData={setData} />
          <Dropdown data={data} setData={setData} />
        </div>
        <div className="md:p-8">
          <ChartResult data={data} />
        </div>
      </div>
    </>
  );
}

export default App;
