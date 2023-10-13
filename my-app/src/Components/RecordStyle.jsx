import DateStyle from './DateStyle'
import './DateStyle.css'
import './RecordStyle.css'
const RecordStyle = (props)=>{
    // console.log(props);
    return (
        <ul className='record'>
            <li className='record'>
                <DateStyle className='record-date' date={props.record.date}></DateStyle>
            </li>
            <li>{props.record.meal}</li>
            <li>{props.record.content}</li>
            <li className='record-calories'>{props.record.calories}</li>
        </ul>
    )
}

export default RecordStyle;