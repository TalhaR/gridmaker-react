import React from "react";

function Controls({addR, addC, removeR, removeC}) {
    return (
        <div style={{padding: '1%'}}>
            <button onClick={addR}>
                Add Row
            </button>
            <button onClick={addC}>
                Add Col
            </button>
            <button onClick={removeR}>
                Remove Row
            </button>
            <button onClick={removeC}>
                Remove Col
            </button>
            <button onClick={() => console.log("fillU()")}>
                Fill All Uncolored
            </button>
            <button onClick={() => console.log("fill()")}>
                Fill All
            </button>
            <button onClick={() => console.log("clearAll()")}>
                Clear
            </button>
        </div>
    );
}

export default Controls;
