import { useEffect, useState } from "react";
import AddPerson from "./addPerson";
import Display from "./display";
import Retrieve from "./retrieve";
function Hero() {
  const initialData = localStorage.getItem("persons")
    ? JSON.parse(localStorage.getItem("persons"))
    : [];

  const [data, setData] = useState(initialData);
  const [stateHandle, setStateHandle] = useState("DISPLAY");

  const handleDelete = (index) => {
    const newData = [...data.slice(0, index), ...data.slice(index + 1)];
    const stringify = JSON.stringify(newData);
    localStorage.setItem("persons", stringify);
    setData(newData);
  };

  const handleClick = (input) => {
    setStateHandle(input);
  };

  useEffect(() => {
    console.log(stateHandle);
  }, [stateHandle]);

  return (
    <>
      <div className="flex justify-around py-4 border-black border">
        <button
          onClick={() => handleClick("ADD")}
          className="btn btn-primary"
        >
          ADD NEW PERSON
        </button>
        <button
          onClick={() => handleClick("DISPLAY")}
          className="btn btn-secondary"
        >
          DISPLAY DIRECTORY
        </button>
        <button
          onClick={() => handleClick("RETRIEVE")}
          className="btn btn-success"
        >
          RETRIEVE INFORMATION
        </button>
      </div>
      <div className="flex justify-center items-start pt-16 h-[36rem]">
        {stateHandle === "ADD" && <AddPerson setData={setData} data={data} />}
        {stateHandle === "DISPLAY" && (
          <Display data={data} onDelete={handleDelete} />
        )}
        {stateHandle === "RETRIEVE" && <Retrieve data={data} />}
      </div>
    </>
  );
}

export default Hero;