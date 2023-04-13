import React, { useState } from "react";

const EXAmple1 = () => {
  const [open, setopen] = useState(false);
  const h = () => {
    setopen(!open);
  };
  return (
    <div className={!open && `w-[100%] h-80 bg-purple-600`}>
      <div className="w-60 h-60 border-2 border-purple-500 absolute top-5 left-96">
        <img
          src="https://th.bing.com/th/id/OIP.kBSG_fUzTKuwByYHMQoA6AHaEo?pid=ImgDet&rs=1"
          className="w-[100%] h-[100%]"
          alt="...."
          onClick={h}
        />
      </div>
    </div>
  );
};

export default EXAmple1;
