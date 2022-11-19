import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Users() {
 
  const [users, setUsers] = useState([])
  const [isLoding, setIsLoding] = useState(true)


  /*   *** fetch***
   useEffect(() => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then(x=>setUsers(x))
    .catch(e=>console.log(e))
    .finally(()=>setIsLoding(false));
    
  }, []) */
   
  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(x=>setUsers(x.data))
    .catch(e=>console.log(e))
    .finally(()=>setIsLoding(false));
    
  }, [])


  return (
    <div>
      <h1>Users</h1>
      {isLoding &&   <div>Loding...</div> }
         {users.map((v)=><p key={v.id}> {v.id} {v.name} --- {v.company.name}</p>)}
    </div>
  )
}
