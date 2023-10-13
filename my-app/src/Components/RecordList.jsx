import RecordStyle from "./RecordStyle";
import './RecordList.css'
const RecordList = (props) =>{
    return(
        <ul className='record-list'>
            <li>
                <RecordStyle record={props.record}></RecordStyle>
            </li>
        </ul>
    );
}
export default RecordList;