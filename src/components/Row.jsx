import Cell from './Cell'

function Row({ size }) {
    const getCols = () => {
        const colArray = [];

        for(let i = 0; i < size; ++i) {
            colArray.push(<Cell key={i} />);
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
