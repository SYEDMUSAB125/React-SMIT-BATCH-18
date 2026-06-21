import React, { useCallback, useState } from "react";
import ExampleRender from "./ExampleRender";

function LearnCallback() {
  const [adder, setAdder] = useState(0);
  const [multi, setMulti] = useState(2);

  const newMulti = useCallback(()=>{
   console.log("hello we are in parent ",multi)
  },[multi])

  return (
    <div>
      <h1>Adder: {adder}</h1>
      <ExampleRender multi={multi} data={newMulti} />
      <button onClick={() => setAdder(adder + 1)}>adder</button>
      <button onClick={() => setMulti(multi * 2)}>multi</button>
    </div>
  );
}

export default LearnCallback;
