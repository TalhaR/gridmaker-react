import React from "react";

function Controls({ addR, addC, removeR, removeC, handleC, fillA, fillU }) {
  return (
    <div style={{ padding: "1%" }}>
      <button onClick={addR}>Add Row</button>
      <button onClick={addC}>Add Col</button>
      <button onClick={removeR}>Remove Row</button>
      <button onClick={removeC}>Remove Col</button>
      <button onClick={fillU}>Fill All Uncolored</button>
      <button onClick={() => fillA()}>Fill All</button>
      <button onClick={() => fillA("white")}>Clear</button>
      <select onChange={handleC}>
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="yellow">Yellow</option>
      </select>
    </div>
  );
}

export default Controls;
