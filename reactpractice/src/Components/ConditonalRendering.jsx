import React from 'react'
import {useState,useEffect} from 'react'
function ConditonalRendering() {
    const [islLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState([])
    const [error, setError] = useState(false)
    const fetchUsers = async () => {
       try{
        const response = await fetch("https://api.github.com/users/QuincyLarson");
        const Data = await response.json();
        setUser(Data);
        setIsLoading(false)
       }
       catch(err){
           setError(err)
       }
      };
    useEffect(() => {
        fetchUsers()
    
        return () => {
            setIsLoading(true)
        }
    }, [])
    return (
        <div>
            {islLoading?<h1>Loading...................</h1>:error?<h2>{error}</h2>:user?<h2>{user.login}</h2>:""}
        </div>
    )
}

export default ConditonalRendering
