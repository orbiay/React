import { useState } from "react";
import ClickCounter from "./ClickCounter";

const AddRecord = (props)=>{
    const [clicketime,SetClicked] = useState(0);
    const [Date,SetDate] = useState(0);
    const [Meal,SetMeal] = useState(0);
    const [Content,SetContent] = useState(0);
    const [Calories,SetCalories] = useState(0);
    const onDate = (value) => {
        SetDate(value.target.value);
    }
    const onMeal = (value) => {
        SetMeal(value.target.value);
        console.log(value);
    }
    const onContent = (value) => {
        SetContent(value.target.value);
    }
    const onCalorie = (value) => {
        SetCalories(value.target.value);
    }
    const onform = (event) =>{
        event.preventDefault();
        // console.log('hello');
        // onSubmiHandler
        props.onSubmiHandler({meal:Meal,date:Date,content:Content,calories:Calories})
        // console.log(event);
        // console.log(Meal,Date,Content,Calorie);

    }
    return (
        <form onSubmit={onform}>
            <label>Date: </label>
            <input type="date" name='date' onChange={onDate}></input>
            <label> Meal: </label>
            <select className='form select' name='meal' onChange={onMeal}>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snacks">Snacks</option>
            </select>
            <label> Content: </label>
            <input type="text" name='content' onChange={onContent} ></input>
            <label> Calories: </label>
            <input type="text" name='calories' onChange={onCalorie} ></input>
            <div className='footer'>
                <button>Add Record</button>
                {/* <ClickCounter SetClicked={SetClicked}></ClickCounter> */}
            </div>
        </form>
    );
}
export default AddRecord;