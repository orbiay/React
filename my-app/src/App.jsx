// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react';
import './App.css'
import AddRecord from './Components/AddRecord';
import RecordList from './Components/RecordList';

const INITIAL_RECORD = [
  {
    date:new Date(2023,2,1),
    meal:'Breakfast',
    content:'Eggs',
    calories:200
  },
  {
    date:new Date(2023,2,2),
    meal:'lunch',
    content:'Chiken',
    calories:500
  },
  {
    date:new Date(2023,2,3),
    meal:'Dinner',
    content:'Cheese',
    calories:700
  },
  {
    date:new Date(2023,2,4),
    meal:'Snacks',
    content:'Choclate',
    calories:1000,
  }
]
function App() {
  const [records,SetRecord] = useState(INITIAL_RECORD);
  const onSubmiHandler = (newRecord)=>{
    console.log(newRecord)
    const editDate = {
      ...newRecord,
      date: new Date(newRecord.date),
    }
    SetRecord([editDate,...records]); 
    console.log(records);
  }
  return (
    <>
    <h1>Hi There 👋, Calories Tracker</h1>
    <div>
      <AddRecord onSubmiHandler={onSubmiHandler}></AddRecord>
    </div>
    {
      records.map((record,index)=>{
        return(
        <RecordList key={index} record={record}></RecordList>
        )
      })
    }
    </>
  )
}

export default App
