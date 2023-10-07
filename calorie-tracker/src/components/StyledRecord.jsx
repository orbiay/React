import './StyledRecord.css'
function StyledRecord(props){
    return (
        <div className="styled-record-date" >{props.children}</div>
    );
}
export default StyledRecord;