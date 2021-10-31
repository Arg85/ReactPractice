import React , {useReducer, useState} from 'react'
import { data } from '../../data'
import Modal from './Modal'
import { v4 as uuidv4 } from 'uuid';
import { reducer } from './Reducers';
const defaultState={
    peoples:[],
    isModalOpen:false,
    modalContent:'Hello There First'
}

function Index() {
    const [state,dispatch]=useReducer(reducer,defaultState )
    const [name, setName]= useState("")
    const closeModal=()=>{
        dispatch({type:"CLOSE_MODAL"})
    }
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
            {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
            <form onSubmit={(e)=>{submitHandler(e)}}>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <button type="submit">Add</button>
            </form>
            {state.peoples.map((people)=>{return <li key={people.id}>{people.name} <button onClick={()=>{dispatch({type:"REMOVE_ITEM",payload:people.id})}}>Remove</button></li>})}
        </div>
    )
}

export default Index
