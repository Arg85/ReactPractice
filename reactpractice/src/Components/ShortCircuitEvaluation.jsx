import React from 'react'
import {useState,useEffect} from 'react'
function ShortCircuitEvaluation() {
    const [text, setText] = useState("fgj")
    return (
        <div>
            {text && "hello"}
            {text || "hello worls"}
        </div>
    )
}

export default ShortCircuitEvaluation
