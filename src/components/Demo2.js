import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 10;
  const [y, setY] = useState(0);
  const ref = useRef(0);

  return (
    <div className="m-4 p-2 border border-black bg-slate-100 w-96 h-96">
      <div>
        <button
          className="bg-green-300 p-2 m-2"
          onClick={() => {
            x = x + 1;
            console.log(x);
          }}
        >
          Increase X
        </button>

        <span>Let: {x}</span>
      </div>
      <div>
        <button
          className="bg-green-300 p-2 m-2"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase Y
        </button>

        <span>State: {y}</span>
      </div>
      <div>
        <button
          className="bg-green-300 p-2 m-2"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref = ", ref.current);
          }}
        >
          Increase Ref
        </button>

        <span>Ref: {ref.current}</span>
      </div>
    </div>
  );
};

export default Demo2;
