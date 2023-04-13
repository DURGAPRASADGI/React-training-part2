import React, { createContext, useContext } from "react";
export let Data = createContext();
const EX_1 = () => {
  return (
    <>
      <Data.Provider value={1}>
        <A />
      </Data.Provider>
    </>
  );
};

export default EX_1;

const A = () => {
  return (
    <>
      <B />
    </>
  );
};

const B = () => {
  let number = useContext(Data);
  return (
    <>
      <h1>{number}</h1>
    </>
  );
};
