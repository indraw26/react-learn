import { useState } from "react";

const Name = () => {
  const [name, setName] = useState("");

  const handlerSetName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>Hello : {name}</p>
      <br />
      <input className="border" type="text" onChange={handlerSetName} />
    </div>
  );
};

export default Name;
