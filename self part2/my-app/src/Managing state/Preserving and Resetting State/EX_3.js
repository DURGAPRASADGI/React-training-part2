import React, { useState } from "react";

const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

const EX_3 = () => {
  const [details, setdetails] = useState(contacts);
  const [single, setsingle] = useState(details[0]);

  return (
    <>
      {details.map((i, index) => (
        <button key={index} onClick={() => setsingle(i)}>
          {i.name}
        </button>
      ))}
      <textarea value={`chart to  ${single.name}`}  />
      <button>send to the {single.email}</button>
    </>
  );
};

export default EX_3;
