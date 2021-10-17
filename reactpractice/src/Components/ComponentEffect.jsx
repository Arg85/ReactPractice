import React from 'react'
import { useState, useEffect } from "react";
function ComponentEffect() {
    const [users, setUsers] = useState([]);
    const fetchUsers = async () => {
      const response = await fetch("https://api.github.com/users");
      const Data = await response.json();
      setUsers(Data);
    };
    useEffect(() => {
      fetchUsers();
      return () => {};
    }, []);
    return (
        <div className="App">
        {users.map((user) => {
          return (
            <div key={user.id} className="card">
              <li>
                <img
                  className="GitImage"
                  src={user.avatar_url}
                  alt={user.type}
                ></img>
               
                  <h4>{user.login}</h4>
                  <a href={user.html_url}>Profile</a>
             
              </li>
            </div>
          );
        })}
      </div>
    )
}

export default ComponentEffect
