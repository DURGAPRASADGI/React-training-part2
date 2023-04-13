import React, { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

const EX_1 = () => {
  const [list, setlist] = useState(initialItems);
  const [close, setclose] = useState(list[0]);

  return (
    <>
      {list.map((i, index) => (
        <div key={index} className="flex">
          <li>{i.title}</li>
          <button onClick={() => setclose(i)} className="bg-slate-600">
            Choose
          </button>
        </div>
      ))}
      <p>{close.title}</p>
    </>
  );
};

export default EX_1;
