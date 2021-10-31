import React , {useReducer, useState} from 'react'
import { data } from '../../data'
import Modal from './Modal'
import { v4 as uuidv4 } from 'uuid';
const reducer=(state,action)=>{
if(action.type==="ADD_PEOPLE"){
    const newPeople=[...state.peoples,action.payload]
    return {...state,peoples:newPeople,isModalOpen:true,modalContent:"Added"}

}
if(action.type==="NO_VALUE"){
    return {...state,isModalOpen:true,modalContent:"Cannot Be Added"}
}
throw new Error("No matching action Type Found")
}
const defaultState={
    peoples:[],
    isModalOpen:false,
    modalContent:'Hello There First'
}
function Index() {
    const [state,dispatch]=useReducer(reducer,defaultState )
    const [name, setName]= useState("")
const submitHandler=(e)=>{
    e.preventDefault()
    if(name){
        const newPeople={id:uuidv4(),name:name,}
     dispatch({type:'ADD_PEOPLE',payload:newPeople})
    }
    else{
        dispatch({type:'NO_VALUE'})

    }
}
    return (
        <div>
        <h1>Hellow index aahe</h1>
            {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <button type="submit">Add</button>
            </form>
            {state.peoples.map((people)=>{return <li key={people.id}>{people.name}</li>})}
        </div>
    )
}

export default Index
