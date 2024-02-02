// BudgetContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";

const BudgetContext = createContext();

export const BudgetProvider = ({ children }) => {
  const [budget, setBudget] = useState(2000);
  const [remaining, setRemaining] = useState(2000);
  const [spent, setSpent] = useState(0);
  const [data, setData] = useState([]);

  const updateBudget = (newBudget) => {
    setBudget(newBudget);
    setRemaining(newBudget - spent);
  };

  const updateSpent = (newSpent) => {
    setSpent(newSpent);
    setRemaining(budget - newSpent);
  };

  const updateData = (newData) => {
    setData(newData);

    const totalSpent = newData.reduce((acc, item) => acc + item.cost, 0);
    updateSpent(totalSpent);
  };

  useEffect(() => {
    const storedData = localStorage.getItem("data");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      updateData(parsedData);
    }
  }, [budget, updateData]);

  return (
    <BudgetContext.Provider
      value={{
        budget,
        remaining,
        spent,
        data,
        updateBudget,
        updateSpent, // Make sure updateSpent is provided in the context
        updateData,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
};

export const useBudget = () => {
  return useContext(BudgetContext);
};
