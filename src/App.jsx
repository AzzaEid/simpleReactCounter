import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count,setCount]= useState(0);
  function increaseCounter(){
    setCount(++count);
  }
  return (
    <>
     <button onClick={increaseCounter} className='button-9'> {count} clicks </button>
    </>
  )
}

export default App
