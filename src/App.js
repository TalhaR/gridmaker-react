import { useState } from "react";
import "./App.css";
import Controls from "./components/Controls";
import Row from "./components/Row";

function App() {
  const [matrix, setMatrix] = useState([["white"]]);
  const [color, setColor] = useState("white");

  const addRow = () => {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      newMatrix.push(matrix[i]);
    }

    let pushingMatrix = Array(newMatrix[0].length).fill("white");
    newMatrix.push(pushingMatrix);
    setMatrix(newMatrix);
  };

  const addCol = () => {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      newMatrix.push(matrix[i]);
      newMatrix[i].push("white");
    }
    setMatrix(newMatrix);
  };

  const removeRow = () => {
    if (matrix.length === 1) return;

    let newMatrix = [];
    for (let i = 0; i < matrix.length - 1; i++) {
      newMatrix.push(matrix[i]);
    }
    setMatrix(newMatrix);
  };

  const removeCol = () => {
    if (matrix[0].length === 1) return;

    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      newMatrix.push(matrix[i]);
      newMatrix[i].pop();
    }
    setMatrix(newMatrix);
  };

  const fillAll = (inputColor) => {
    let newMatrix = [];
    for (const row of matrix) {
      newMatrix.push(row.fill(inputColor ?? color));
    }

    setMatrix(newMatrix);
  };

  const fillUncolored = () => {
    let newMatrix = [];
    for (const row of matrix) {
      const tempRow = [];
      for (const col of row) {
        if (col !== "white") {
          tempRow.push(col);
        } else {
          tempRow.push(color);
        }
      }
      newMatrix.push(tempRow);
    }

    setMatrix(newMatrix);
  };

  const getRows = () => {
    const rowsArray = [];

    for (let i = 0; i < matrix.length; ++i) {
      rowsArray.push(
        <Row
          key={i}
          inputMatrix={matrix[i]}
          changeColor={changeColor}
          rowIndex={i}
        />
      );
    }

    return rowsArray;
  };

  const changeColor = (row, col) => {
    let newMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
      newMatrix.push(matrix[i]);
    }
    newMatrix[row][col] = color;
    setMatrix(newMatrix);
  };

  return (
    <div className="App">
      <Controls
        addR={addRow}
        addC={addCol}
        removeR={removeRow}
        removeC={removeCol}
        handleC={(event) => setColor(event.target.value)}
        fillA={fillAll}
        fillU={fillUncolored}
      />
      <table>
        <tbody>{getRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
