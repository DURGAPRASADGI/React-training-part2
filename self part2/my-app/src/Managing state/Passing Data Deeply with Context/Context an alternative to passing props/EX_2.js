import React, { createContext, useContext } from "react";

export const data = createContext(0);
console.log("gii");
const EX_2 = () => {
  return (
    <>
      <S>
        <H>hiii</H>
        <S>
          <H>hello</H>
          <H>buy</H>
          <H>thanks</H>
          <S>
            <H>who</H>
          </S>
        </S>
      </S>
    </>
  );
};

export default EX_2;
const S = ({ children }) => {
  const l = useContext(data);
  return (
    <>
      <data.Provider value={l + 1}>{children}</data.Provider>
    </>
  );
};
const H = ({ children }) => {
  const d = useContext(data);

  switch (d) {
    case 1:
      return <h1>{children + d}</h1>;
    case 2:
      return <h1>{children + d}</h1>;

    default:
      return <h1>"please check once"</h1>;
  }
};
