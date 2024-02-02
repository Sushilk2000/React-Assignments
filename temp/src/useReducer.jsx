import { useReducer } from "react";

function Reducer() {
  const initalState = {
    count: 0,
  };
  function reducerFun(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 10 };
      case "decrement":
        return { count: state.count - 5 };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(reducerFun, initalState);
  function increment() {
    dispatch({ type: "increment" });
  }
  function decrement() {
    dispatch({ type: "decrement" });
  }
  return (
    <>
      <button onClick={decrement}>-</button>
      <button>{state.count}</button>
      <button onClick={increment}>+</button>
    </>
  );
}
export default Reducer;
