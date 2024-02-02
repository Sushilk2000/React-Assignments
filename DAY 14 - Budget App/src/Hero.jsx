// Hero.js
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useBudget } from "./BudgetContext";
import { useEffect, useRef, useState } from "react";
import isEqual from "lodash/isEqual";

function Hero() {
  const { remaining, spent, data, updateData, updateSpent, updateBudget } =
    useBudget();
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const nameRef = useRef();
  const costRef = useRef();

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      updateData(parsedData);
    }
  }, [updateData]);

  function handleAdd() {
    const nameValue = name.trim();
    const costValue = Number(cost);

    if (nameValue === "" || isNaN(costValue) || costValue <= 0) {
      toast.error(
        "Invalid input. Name cannot be empty, and cost must be a positive number."
      );
      return;
    }
    if (costValue > remaining) {
      toast.error("Value cannot be greater that remaining budget.");
      return;
    }

    const obj = {
      name: nameValue,
      cost: costValue,
    };

    const isDuplicate = data.some((item) => isEqual(item, obj));

    if (isDuplicate) {
      toast.warn("Duplicate entry detected.");
      return;
    }

    updateData((prevData) => {
      const newData = [...prevData, obj];
      localStorage.setItem("data", JSON.stringify(newData));
      return newData;
    });

    setName("");
    setCost("");
  }

  function handleDelete(index) {
    updateData((prevData) => {
      const deletedItem = prevData[index];
      const newData = [...prevData];
      newData.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(newData));

      const totalSpent = newData.reduce((acc, item) => acc + item.cost, 0);
      updateSpent(totalSpent);
      updateBudget((prevBudget) => prevBudget + deletedItem.cost);

      return newData;
    });
  }

  return (
    <div>
      <div className="flex justify-around bg-green-400 border h-20 border-black text-red-700 p-4 font-serif font-semibold text-xl">
        <button disabled>Budget: {2000}</button>
        <button disabled>Remaining: {remaining}</button>
        <button disabled>Spent so far: {spent}</button>
      </div>
      <div className="flex flex-col items-center gap-8">
        <div className="flex gap-16 justify-center mt-4">
          <div className="flex flex-col gap-2 text-xl font-semibold">
            <label htmlFor="Name">Name: </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border border-black w-[25rem] px-4 py-2 rounded-md btn"
              required
              id="Name"
              ref={nameRef}
            />
          </div>
          <div className="flex flex-col gap-2 text-xl font-semibold">
            <label htmlFor="Cost">Cost: </label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              id="Cost"
              required
              className="border border-black w-[25rem] px-4 py-2  btn rounded-md"
              ref={costRef}
            />
          </div>
        </div>
        <button
          className="btn btn-success w-max px-8 text-xl"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>
      <div className="mt-8 flex flex-col">
        <h2 className="text-2xl font-bold pl-12 mb-8">Expense List</h2>
        <ul className="flex w-full flex-col items-center gap-4">
          {data.map((item, index) => (
            <li
              key={index}
              className="flex justify-between px-64 w-full text-xl font-semibold font-serif items-center text-black"
            >
              <span className="w-[8rem] overflow-clip">
                {item.name.toUpperCase()}:
              </span>{" "}
              ${item.cost}
              <button
                className="ml-4 text-red-500"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Hero;
