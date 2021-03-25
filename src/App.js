import { useState } from 'react';
import './App.css';
import Controls from './components/Controls'
import Row from './components/Row'

function App() {
  const [rows, setRows] = useState(1);
  const [cols, setCols] = useState(1);

  const addRow = () => setRows(rows + 1);
  const addCol = () => setCols(cols + 1);

  const removeRow = () => {
    if (rows > 0) setRows(rows - 1);
  }
  const removeCol = () => {
    if (cols > 0) setCols(cols - 1);
  }

  const getRows = () => {
    const rowsArray = [];

    for(let i = 0; i < rows; ++i) {
      rowsArray.push(<Row key={i} size={cols} />);
    }

    return rowsArray;
  }

 

  return (
    <div className="App">
      <Controls addR={addRow} addC={addCol} removeR={removeRow} removeC={removeCol}/>
      <table>
        <tbody>
          { getRows() }
        </tbody>
      </table>

    </div>
  );
}

export default App;
