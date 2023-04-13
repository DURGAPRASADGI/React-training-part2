import React, { useState } from "react";

const EX_2 = () => {
  const [count, setcount] = useState(0);
  return (
    <>
      <h1>hii</h1>
      <H number={count === 0} title={"Durga"} d={() => setcount(0)}>
        this my send frist data
      </H>
      <H number={count === 1} title={"Prasad"} d={() => setcount(1)}>
        this my send secound data
      </H>
    </>
  );
};

export default EX_2;

const H = ({ number, title, children, d }) => {
  return (
    <>
      <h1>{title}</h1>
      {number ? (
        <p>{children}</p>
      ) : (
        <button onClick={d} className="bg-purple-500 p-1 border text-white">
          About
        </button>
      )}
    </>
  );
};
