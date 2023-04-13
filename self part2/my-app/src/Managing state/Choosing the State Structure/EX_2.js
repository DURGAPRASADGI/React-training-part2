import React, { useState } from "react";

const initialItems = [
  { title: "pretzels", id: 0 },
  { title: "crispy seaweed", id: 1 },
  { title: "granola bar", id: 2 },
];

const EX_2 = () => {
  const [king, setking] = useState(initialItems);
  const [thing, setthing] = useState(king[0]);
  const h = (id, e) => {
    setking(
      king.map((k) => {
        if (k.id === id) {
          return { ...k, title: e.target.value };
        } else {
          return k;
        }
      })
    );
  };

  return (
    <>
      {king.map((i, index) => (
        <div key={i.id}>
          <input
            type="text"
            value={i.title}
            className="border border-black"
            onChange={(e) => h(i.id, e)}
          />
          <button onClick={()=>setthing(i)}>Choose</button>
        </div>
      ))}

      <p>{thing.title}</p>
    </>
  );
};

export default EX_2;
