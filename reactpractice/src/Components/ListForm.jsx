import React, { useState, useEffect } from "react";
function ListForm() {
    const [peoples, setPeoples] = useState([]);
    const [formVal, setFormVal] = useState({
        FirstName: "",
        Email: "",
        
    });
    useEffect(()=>{
        console.log("component rendered")
    },[peoples])
  const SubmitEvent=(e)=>{
      e.preventDefault()
      console.log("hua")
      setPeoples([...peoples,{...formVal,id:formVal.Email}])

  }
  const setFormValue = (e) => {
    setFormVal({...formVal, [e.target.name]: e.target.value });
  };
  const RemovePerson=(personid)=>{
    console.log(personid,"person udh")
const newPeople=peoples.filter((person)=>person.id!==personid)
setPeoples(newPeople)
  }
  return (
    <div>
      <form>
        <label htmlFor="FirstName">FirstName</label>
        <input
          type="text"
          value={formVal.FirstName}
          name="FirstName"
          onChange={(e) => {
            setFormValue(e);
          }}
        ></input>
        <label htmlFor="Email">Email</label>
        <input
          type="Email"
          name="Email"
          value={formVal.Email}
          onChange={(e) => {
            setFormValue(e);
          }}
        ></input>
        <input type="submit" onClick={(e)=>{SubmitEvent(e)}}></input>
      </form>
      {peoples.map((people) => {
        return <li key={people.id}>{people.FirstName}<button onClick={()=>{RemovePerson(people.id)}}>{people.id}</button></li>;
      })}
    </div>
  );
}

export default ListForm;
