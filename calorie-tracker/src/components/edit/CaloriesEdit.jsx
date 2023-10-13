import { useState } from 'react';
import './CaloriesEdit.css'
import ClickCounter from './ClickCounter';
function CaloriesEdit(props) {
    const [clicketime,SetClicked] = useState(0);
    const [datevalue,SetDate] = useState(0);
    const [mealvalue,SetMeal] = useState(0);
    const [contentvalue,SetContent] = useState(0);
    const [calorievalue,SetCalorie] = useState(0); 
    const DateHandler = (event) => {
        SetDate(event.target.value);
    }
    const MealHandler = (event) => {
        SetMeal(event.target.value);
    }
    const ContentHandler = (event) => {
        SetContent(event.target.value);
    }
    const CaloriesHandler = (event) => {
        SetCalorie(event.target.value);
    }
    function onSubmitHandler(event){
        event.preventDefault();
        //console.log();
        props.onSubmit({meal:mealvalue,date:datevalue,content:contentvalue,calories:calorievalue})
        console.log('Meal',mealvalue,'\nDate',datevalue,'\nContent',contentvalue,'\nCalories',calorievalue);
    }
    return (
        <form onSubmit={onSubmitHandler} >
            <div>
            <label>How many times clicked: {clicketime}</label>
            </div>
            <label>Date: </label>
            <input type="date" name='date' onChange={DateHandler}></input>
            <label> Meal: </label>
            <select className='form select' name='meal' onChange={MealHandler}>
                <option value="Breakfast">Breakfast</option>
                <option value="Lunch">Lunch</option>
                <option value="Dinner">Dinner</option>
                <option value="Snacks">Snacks</option>
            </select>
            <label> Content: </label>
            <input type="text" name='content' onChange={ContentHandler}></input>
            <label>  Calories: </label>
            <input type='text' name='calories' onChange={CaloriesHandler}></input>
            <div className='footer'>
                <button>Add Record</button>
                <ClickCounter SetClicked={SetClicked}></ClickCounter>
            </div>
        </form>
    );
}
export default CaloriesEdit;