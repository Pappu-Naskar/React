import { useState } from 'react'
import reactLogo from './assets/react.svg' 
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter , setCounter /**you can use any name because setCounter is a reference name  */] = useState(0)
  // let counter = 15

  const addValue =()=>{
    // console.log("clicked",counter) 
  //  counter = counter + 1
  // setCounter(counter)
if(counter<20){
  // counter = counter + 1
  setCounter(preCounter=>preCounter+1)
  setCounter(preCounter=>preCounter+1)
  setCounter(preCounter=>preCounter+1)
  setCounter(preCounter=>preCounter+1)
}
  
 
  }

  const removeValue=()=>{
    if(counter>0){
    counter = counter - 1
    setCounter(counter) 
    }
    
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value {counter}</h2>
     <button 
     onClick={addValue}>add value</button>
     <br/>
     <button
     onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
