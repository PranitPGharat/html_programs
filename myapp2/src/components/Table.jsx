// nested table compoenent
import Tablebody from "./Tablebody"
import Tableheader from "./Tableheader"
import './Table.css'
const Table = () => {
    return (
        <div>
            <table className='one' border="4">
                <Tableheader />
                <Tablebody />
            </table>
        </div>
    )
}
export default Table