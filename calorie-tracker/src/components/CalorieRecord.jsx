import CalorieRecordDate from './CalorieRecordDate';
import './CaloriesRecord.css'
function CalorieRecord(props) {
    const month = props.record.date.toLocaleString("default",{month:"long"});
    const day = props.record.date.getDate();
    const year = props.record.date.getFullYear();
    return (
        <ul className='record'>
            <li className='record'>
                <CalorieRecordDate date={props.record.date}></CalorieRecordDate>
            </li>
            <li>{props.record.meal}</li>
            <li> {props.record.content}</li>
            <li className='record-calories'>{props.record.calories}</li>
        </ul>
    );
}
export default CalorieRecord;