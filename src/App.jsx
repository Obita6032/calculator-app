import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Culculator  from './calculator.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div  className="App">
      
        <Culculator />

        <button onClick={()=>setCount}></button>
        
      </div>
      
     
     
    </>
  )
}

export default App
