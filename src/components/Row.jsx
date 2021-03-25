import Cell from './Cell'

function Row({ inputMatrix }) {
    const getCols = () => {
        const colArray = [];

        for(let i = 0; i < inputMatrix.length; ++i) {
            colArray.push(<Cell key={i} inputColor={inputMatrix[i]}/>);
        }

        return colArray;
    }

    return (
        <tr>
            { getCols() }
        </tr>
    )
}

export default Row
