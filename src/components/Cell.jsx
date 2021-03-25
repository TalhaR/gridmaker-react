function Cell({ inputColor, rowIndex, columnIndex, changeColor }) {
  return (
    <td
      onClick={() => changeColor(rowIndex, columnIndex)}
      style={{ backgroundColor: inputColor }}
    ></td>
  );
}

export default Cell;
