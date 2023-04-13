import React, { useState } from "react";

const EX_2 = () => {
  const [item, setitem] = useState(false);
  return (
    <>
      <div
        className={
          item ? `w-60 h-60 border-2 border-purple-700` : `w-60 h-60 border`
        }
      >
        <button>hii</button>
      </div>

      <input
        type="checkbox"
        checked={item}
        className="bg-blue-700 text-purple-500"
        onChange={(e) => setitem(e.target.checked)}
      />
    </>
  );
};

export default EX_2;
