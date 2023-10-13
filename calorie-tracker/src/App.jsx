import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalorieRecord from './components/CalorieRecord'
import RecordList from './components/RecordList'
import CaloriesEdit from './components/edit/CaloriesEdit'
const INITIAL_RECORD = [
  // {
  //   date:new Date(2023,2,1),
  //   meal:'Breakfast',
  //   content:'Eggs',
  //   calories:200
  // },
  // {
  //   date:new Date(2023,2,2),
  //   meal:'lunch',
  //   content:'Chiken',
  //   calories:500
  // },
  // {
  //   date:new Date(2023,2,3),
  //   meal:'Dinner',
  //   content:'Cheese',
  //   calories:700
  // },
  // {
  //   date:new Date(2023,2,4),
  //   meal:'Snacks',
  //   content:'Choclate',
  //   calories:1000,
  // }
];
function App() {
  let [records,setRecord] = useState(INITIAL_RECORD);

  const Onsubmithandler = (event)=>{
    // records.push(event);
    const formatRecord = {
      ...event,
      date:new Date(event.date)
    }
    console.log(event);
    setRecord([formatRecord,...records]);
    console.log(records);
  }
  return (
    <>
      <div>
        <h1>Hi There 👋, Calories Tracker</h1>
        <CaloriesEdit onSubmit={Onsubmithandler}></CaloriesEdit>
        {
          records.map((record,index)=>{
            return(
            <RecordList key={index} records={record}/>
          )})
        }
        <button onClick={()=>{window.alert('Hello')}}>Submit</button>
      </div>
    </>
  )
}

export default App
