import "./style.css";
import { useState } from "react";

const NumberR = () => {
  const [random, setNumber] = useState(Math.floor(Math.random() * 100) + 1);

  const handleAdd = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
  };

  return (
    <div>
      <div className="numberRandom">
        <p>{random}</p>
      </div>
      <button className="bntSwap" onClick={handleAdd}>
        {" "}
        Criar novo número{" "}
      </button>
    </div>
  );
};

export default NumberR;
