import React, { useState, useRef } from "react";
function ListForm() {

  const [peoples, setPeoples] = useState([]);
  const [formVal, setFormVal] = useState({
    FirstName: "",
    Email: "",
  });
  const SubmitEvent=(e)=>{
      e.preventDefault()
      console.log("hua")
      setPeoples([...peoples,formVal])

  }
  const setFormValue = (e) => {
    setFormVal({...formVal, [e.target.name]: e.target.value });
  };
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
        return <li>{people.FirstName}</li>;
      })}
    </div>
  );
}

export default ListForm;
