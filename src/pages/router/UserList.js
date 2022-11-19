import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {NavLink,Outlet} from 'react-router-dom'


export default function UserList() {

  const [users, setUsers] = useState([])
  const [loding, setLoding] = useState(true)
  
  let activeClassName = "activeClass";

  useEffect(() => { 
    axios('https://jsonplaceholder.typicode.com/users')
    .then(x=>setUsers(x.data))
    .catch(e=>console.log(e))
    .finally(()=>setLoding(false));
    
  }, [])
  
  return (

    <div >
      <h1>User List</h1>
       {loding && <div>Loding...</div>}
       <ul>{users.map((x)=><li key={x.id}><NavLink className={({isActive})=> isActive  ? activeClassName :undefined }  to={`/users/${x.id}`}>{x.name}</NavLink></li>)}</ul>
       

      <Outlet />
    </div>
  )
}
