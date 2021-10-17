import logo from './logo.svg';
import './App.css';
import {useState,useEffect} from 'react'
function App() {
  const [size,setSize]=useState(window.innerWidth)
  useEffect(() => {
    console.log("useeffect called")
    window.addEventListener('resize',()=>{
      setSize(window.innerWidth)
    })
    return () => {
    console.log("Cleanuo")
    window.removeEventListener('resize',setSize(window.innerWidth))
    }
  })
  console.log("COmponent Rednered")
  return (
    <div className="App" >
     <h1>Window size</h1>
     <h2>{size}</h2>
    </div>
  );
}

export default App;
