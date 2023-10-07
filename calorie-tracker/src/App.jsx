import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CalorieRecord from './components/CalorieRecord'
import RecordList from './components/RecordList'
function App() {
  
  const records = [
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
  return (
    <>
      <div>
        <h1>Hi There 👋, Calories Of Last Week</h1>
        <RecordList records={records}></RecordList>
        <button onClick={()=>{window.alert('Hello')}}>Submit</button>
      </div>
    </>
  )
}

export default App
