import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj ={
    userName:"Pappu",
    age: 22
  }
  let NEW_ARR = [1,2,3]

  return (
    <>
    <h1 class=" bg-amber-500 text-red-900 rounded-2xl p-1.5">Tailwind Test</h1>
    <Card username="chaiaurcode" btnText="click me"/>
    <Card username="Pecock" btnText="view more"/>
    
        

    </>
  )
}

export default App
