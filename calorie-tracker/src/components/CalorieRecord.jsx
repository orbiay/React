import { useState } from 'react';
import CalorieRecordDate from './CalorieRecordDate';
import './CaloriesRecord.css'
function CalorieRecord(props) {
    const month = props.record.date.toLocaleString("default",{month:"long"});
    const day = props.record.date.getDate();
    const year = props.record.date.getFullYear();
    const [currentCalories,SetCalories] = useState(props.record.calories);
    function CaloriesHandler(){
        console.log('Im here')
        SetCalories(currentCalories + 10);
        console.log(currentCalories);
    }
    return (
        <ul className='record'>
            <li className='record'>
                <CalorieRecordDate date={props.record.date}></CalorieRecordDate>
            </li>
            <li>{props.record.meal}</li>
            <li> {props.record.content}</li>
            <li className='record-calories' onClick={CaloriesHandler}>{currentCalories}</li>
        </ul>
    );
}
export default CalorieRecord;