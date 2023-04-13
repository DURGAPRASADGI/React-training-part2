import React, { useState } from "react";

const EX_1 = () => {
  const [det, setdet] = useState(true);
  return (
    <>
      <Y />
      {det && <Y />}
      <label>
        <input
          type="checkbox"
          checked={det}
          onChange={(e) => {
            setdet(e.target.checked);
          }}
        />
        Render the second counter
      </label>
    </>
  );
};

export default EX_1;

const Y = () => {
  return (
    <>
      <button className="bg-purple-700 text-white block">HII</button>
    </>
  );
};
