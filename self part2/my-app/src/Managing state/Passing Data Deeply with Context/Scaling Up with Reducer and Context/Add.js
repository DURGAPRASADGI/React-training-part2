import React, { useContext, useState } from "react";
import { dis } from "./Context";
let next = 0;
const Add = () => {
  const dispacter = useContext(dis);
  const [item, setitem] = useState("");
  const add = (e) => {
    e.preventDefault();
    dispacter({
      type: "add",
      id: next=next + 1,
      text: item,
    });
  };
  return (
    <>
      <input
        type="text"
        value={item}
        onChange={(e) => setitem(e.target.value)}
      />
      <button onClick={add}>Add</button>
    </>
  );
};

export default Add;
