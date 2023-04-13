import React, { useState } from "react";

const EX_1 = () => {
  return (
    <>
      <h1>my lists</h1>
      <D title="About">hii a durga</D>
      <D title="service">prasad</D>
    </>
  );
};

export default EX_1;

const D = ({ title, children }) => {
  const [item, setitem] = useState(false);
  return (
    <>
      <h1>{title}</h1>
      {item ? (
        <p>{children}</p>
      ) : (
        <button
          onClick={() => setitem(!item)}
          className="bg-blue-600 text-white border"
        >
          show
        </button>
      )}
    </>
  );
};
