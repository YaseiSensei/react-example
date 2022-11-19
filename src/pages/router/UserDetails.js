import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function UserDetails() {
  const {id} =useParams();
  
  
  const [loding, setLoding] = useState(true)
  const [user, setUser] = useState({})

  
  useEffect(() => {
    
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(res=>setUser(res.data))
    .catch(e=>console.log(e))
    .finally(setLoding(false))

  }, [id])
 
    
  
  return (
    <div>
      <h1>User Detail</h1>
      {loding && <div>Loding...</div>}
      {!loding &&<pre> {user.id} / {user.name} / {user.username} / {user.address.city} </pre>}

      
      </div>
  )
}
