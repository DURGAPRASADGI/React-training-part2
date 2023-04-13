import React, { useReducer, useState } from "react";
import { r } from "./R";
import R1 from "./R1";
import R2 from "./R2";
let a = [];
let c = 0;

const EX_3 = () => {
  const [list, desp] = useReducer(r, a);
  const [item, setitem] = useState("");

  const [editid, seteditid] = useState(null);

  const h = (e) => {
    e.preventDefault();
    if (!item) {
      alert("please add to the task");
    } else if (editid) {
      desp({
        type: "edit",
        id: editid,
        text: item,
      });
      seteditid(null);
    } else {
      desp({
        type: "add",
        id: (c = c + 1),
        text: item,
      });
    }
  };

  const k = (id) => {
    const t = list.find((j) => j.id === id);
    setitem(t.text);
    seteditid(id);
  };
  const k1 = (id) => {
    desp({
      type: "delete",
      id: id,
    });
  };
  return (
    <>
      <R1 h={h} item={item} setitem={setitem} />
      <R2 list={list} k={k} k1={k1} />
    </>
  );
};

export default EX_3;
