import React from "react";

function Controls({addR, addC}) {
    return (
        <div style={{padding: '1%'}}>
            <button onClick={addR}>
                Add Row
            </button>
            <button onClick={addC}>
                Add Col
            </button>
            <button onClick={() => console.log("removeR()")}>
                Remove Row
            </button>
            <button onClick={() => console.log("removeC()")}>
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
