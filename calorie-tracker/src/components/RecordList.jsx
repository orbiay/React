import CalorieRecord from './CalorieRecord'
import './RecordList.css'
function RecordList (props){
    return (
    <ul className='record-list'>
        <li>
        <CalorieRecord record={props.records[0]}></CalorieRecord>
        </li>
        <li>
        <CalorieRecord record={props.records[1]}></CalorieRecord>
        </li>
        <li>
        <CalorieRecord record={props.records[2]}></CalorieRecord>
        </li>
        <li>
        <CalorieRecord record={props.records[3]}></CalorieRecord>
        </li>
      </ul>
    );
}
export default RecordList;