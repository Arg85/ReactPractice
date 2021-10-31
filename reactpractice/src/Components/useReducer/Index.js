import React , {useReducer, useState} from 'react'
import { data } from '../../data'
import Modal from './Modal'
import "./Reducer.css"
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
        <div className="ReducerMain">
            {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent}/>}
            <form className="ReducerForm" onSubmit={(e)=>{submitHandler(e)}}>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                <button className="ReducerFormButton btn-accent" type="submit">Add</button>
            </form>
           <div id="table">
           {state.peoples.map((people)=>{return <div className="tr" key={people.id}><span className="td"><h2>{people.name}</h2></span> <button className="ReducerFormButton btn-danger td"  onClick={()=>{dispatch({type:"REMOVE_ITEM",payload:people.id})}}>Remove</button></div>})}
           </div>
        </div>
    )
}

export default Index
