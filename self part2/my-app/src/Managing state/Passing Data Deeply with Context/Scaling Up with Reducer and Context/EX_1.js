import React, { useReducer } from "react";
import { intial, reducer } from "./Storereducer";
import Add from "./Add";
import Change from "./Change";
import { data, dis } from "./Context";

const EX_1 = () => {
  const [state, dispacter] = useReducer(reducer, intial);
  return (
    <>
      <data.Provider value={state}>
        <dis.Provider value={dispacter}>
          <Add />
          <Change />
        </dis.Provider>
      </data.Provider>
    </>
  );
};

export default EX_1;
