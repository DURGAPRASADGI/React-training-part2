import React, { useState } from "react";

const EX_1 = () => {
  const [anwser, setanswer] = useState("");
  const [status, setstatus] = useState("typing");
  const [error, seterror] = useState(null);

  const changehandclick = (e) => {
    setanswer(e.target.value);
  };
  if (status === "sucess") {
    return <h1>that is right</h1>;
  }
  const submithandclick = async (e) => {
    e.preventDefault();
    setstatus("submit");

    try {
      await submit(anwser);
      setstatus("sucess");
    } catch (err) {
      setstatus("typing");
      seterror(err);
    }
  };
  return (
    <>
      <form onSubmit={submithandclick}>
        <textarea
          value={anwser}
          onChange={changehandclick}
          disabled={status === "submit"}
        />
        <br></br>
        <button disabled={anwser.length === 0 || status === "submit"}>
          submit
        </button>
      </form>
      {error != null && <p>{error.message}</p>}
    </>
  );
};

export default EX_1;

const submit = (anwser) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var show = anwser.toLowerCase() === "prasad";
      if (show) {
        resolve();
      } else {
        reject(new Error("please give right answer"));
      }
    }, 1500);
  });
};
