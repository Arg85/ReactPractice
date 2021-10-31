export const reducer=(state,action)=>{
    if(action.type==="ADD_PEOPLE"){
        const newPeople=[...state.peoples,action.payload]
        return {...state,peoples:newPeople,isModalOpen:true,modalContent:"Added"}
    
    }
    if(action.type==="NO_VALUE"){
        return {...state,isModalOpen:true,modalContent:"Cannot Be Added"}
    }
    if(action.type==="CLOSE_MODAL"){
        return {...state,isModalOpen:false}
    }
    if(action.type==="REMOVE_ITEM"){
        const UpdatedPeoples=state.peoples.filter((person)=>person.id!==action.payload)
        return {...state,peoples:UpdatedPeoples,isModalOpen:true,modalContent:"Removed Successfully"}
    }
    throw new Error("No matching action Type Found")
    }
   

