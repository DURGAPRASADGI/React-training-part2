import React, { useContext, useState } from "react";
import { data, dis } from "./Context";

const Change = () => {
  const state = useContext(data);
  const dispacter = useContext(dis);
  const delet = (id) => {
    dispacter({
      type: "delete",
      id: id,
    });
  };

  const edit = (todo) => {
    dispacter({
      type: "edit",
      text: todo.text,
      id: todo.id,
    });
  };
  return (
    <>
      {state.map((i, index) => (
        <div key={index}>
          <G todo={i} delet={delet} edit={edit} />
         
        </div>
      ))}
    </>
  );
};

export default Change;

const G = ({ todo, edit, delet }) => {
  const [open, setopen] = useState(false);
  return (
    <>
      {open ? (
        <>
          <input
            value={todo.text}
            onChange={(e) => edit({ ...todo, text: e.target.value })}
          />
        </>
      ) : (
        <>{todo.text}</>
      )}
      <button onClick={() => setopen(!open)}>{open ? "save" : "edit"}</button>
      <button onClick={() => delet(todo.id)}>delete</button>
    </>
  );
};
