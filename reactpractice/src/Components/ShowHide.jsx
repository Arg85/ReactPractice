import React from 'react'
import {useState,useEffect} from 'react'
function ShowHide() {
    const [show, setShow] = useState("")
    return (
        <div>
            <button onClick={()=>{setShow(prev=>!prev)}}>Show/Hide</button>
            {show && <Show/>}
        </div>
    )
}
const Show=()=>{
    const [size, setSize] = useState(window.innerWidth)
    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setSize(window.innerWidth)
        })
        return ()=>{
            window.removeEventListener("resize",()=>{setSize(window.innerWidth)})
        }
    },[])
    return(

    <div>
<h1>Window</h1>
{size}
    </div>
    )
}
export default ShowHide
