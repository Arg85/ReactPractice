import React , {useReducer, useState} from 'react'
import { data } from '../../data'
import Modal from './Modal'
import { v4 as uuidv4 } from 'uuid';
const reducer=(state,action)=>{

}
const defaultState={
    peoples:data,
    isModalOpen:true,
    modalContent:'Hello There First'
}
function Index() {
    // const [showModal, setShowModal ]= useState(false)
    // const [peoples, setPeoples ]= useState(data)
    const [state,dispatch]=useReducer(reducer,defaultState )
    const [name, setName]= useState("")
const submitHandler=(e)=>{
    e.preventDefault()
    if(name){
     
    }
    else{
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
