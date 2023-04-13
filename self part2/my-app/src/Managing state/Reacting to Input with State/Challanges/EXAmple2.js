import React, { useState } from "react";

const EXAmple2 = () => {
  const [details, setdetails] = useState({
    fristname: "durga",
    lastname: "prasad",
  });
  const [ch, setch] = useState(true);
  const h = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };
  const g = (e) => {
    e.preventDefault();
    setch(!ch);
  };
  return (
    <>
      <form onSubmit={g}>
        firstname:
        {ch ? (
          <label>{details.fristname}</label>
        ) : (
          <input
            type="text"
            name="fristname"
            value={details.fristname}
            onChange={h}
            className="border border-black"
          />
        )}
        <br></br>
        lastname:
        {ch ? (
          <label>{details.lastname}</label>
        ) : (
          <input
            type="text"
            name="lastname"
            value={details.lastname}
            onChange={h}
            className="border border-black"
          />
        )}
        <br></br>
        <button className="bg-purple-700 text-white p-1">
          {ch ? "edit" : "save"}profile
        </button>
      </form>
      <label>hello</label>&nbsp;
      {details.fristname}&nbsp;
      {details.lastname}
    </>
  );
};

export default EXAmple2;
