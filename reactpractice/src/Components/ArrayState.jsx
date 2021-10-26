import React, { useState } from 'react'
import {data} from "../data"
import Card from "./Card"
function ArrayState() {
    const [people,setPeople]=useState(data)
    return (
        <div>
            {people.map((a)=>{return <Card setPeople={setPeople} name={a.name} key={a.id} id={a.id}/>})}
           <div className="cardBut">
           <button
          onClick={() => {
            setPeople([]);
          }}
        >
          Clear All{" "}
        </button>
           </div>
        </div>
    )
}

export default ArrayState
