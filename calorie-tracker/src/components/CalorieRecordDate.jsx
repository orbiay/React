import'./CalorieRecordDate.css'
import StyledRecord from './StyledRecord';
function CalorieRecordDate(props){
    const month = props.date.toLocaleString("default",{month:"long"});
    const day = props.date.getDate();
    const year = props.date.getFullYear();
    return (
        <StyledRecord>
            <div className="record-date-month">{month}</div>
            <div className="record-date-day">{day}</div>
            <div className="record-date-year">{year}</div>
        </StyledRecord>
    );
}
export default CalorieRecordDate