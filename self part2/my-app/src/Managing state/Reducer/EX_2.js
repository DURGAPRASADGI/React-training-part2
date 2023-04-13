import React, { useReducer } from "react";
let intial = {
  name: "",
  pass: "",
};
export const reduce = (state, action) => {
  switch (action.type) {
    case "name":
      return { ...state, [action.fled]: action.text };
    // case "pass":
    //   return { ...state, pass: action.text };

    default:
      return state;
  }
};

const EX_2 = () => {
  const [state, dispater] = useReducer(reduce, intial);
  const h = (e) => {
    dispater({
      type: "name",
      fled: e.target.name,
      text: e.target.value,
    });
  };
  //   const h1 = (e) => {
  //     dispater({
  //       type: "pass",
  //       text: e.target.value,
  //     });
  //   };
  return (
    <>
      <input
        type="text"
        name="name"
        value={state.name}
        onChange={h}
        className="border border-black"
      />
      <input
        type="text"
        name="pass"
        value={state.pass}
        onChange={h}
        className="border border-black"
      />
      {JSON.stringify(state)}
    </>
  );
};

export default EX_2;
