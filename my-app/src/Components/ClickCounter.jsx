function ClickCounter(props){
    
    const {SetClicked} = props;
    function ClickHandler(){
                        // Parameter
        SetClicked((previousValue) => previousValue + 1)
        console.log('Clicked');
    }
    return (
        <button type="button" onClick={ClickHandler}>ClickMe</button>
    );
}

export default ClickCounter;