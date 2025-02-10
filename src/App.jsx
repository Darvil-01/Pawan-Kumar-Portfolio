import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Snowfall from "react-snowfall";
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative min-h-screen overflow-clip custom-text ">
      {/* Snowfall Effect */}
      <Snowfall
        color="white"
        snowflakeCount={35} 
        wind={[-1, 1]}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",  
          zIndex: 9999, 
        }}
      />

      {/* Main Content */}
      <Nav />
      <Outlet />
    </div>
    </>
  )
}

export default App
