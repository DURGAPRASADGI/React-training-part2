import React, { useReducer } from "react";
let intial = { count: 0 };

export const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "d":
      return { count: state.count - 1 };
    default:
      return state;
  }
};
const EX_1 = () => {
  const [state, dispater] = useReducer(reducer, intial);
  const h = () => {
    dispater({
      type: "increment",
    });
  };
  return (
    <>
      <button onClick={h}>+</button>
      <button
        onClick={() => {
          dispater({ type: "d" });
        }}
      >
        -
      </button>
      {state.count}
    </>
  );
};

export default EX_1;
