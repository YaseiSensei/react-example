import React, {  useState } from 'react'
import {useUser} from './UserContext'

export default function Profile() {
    /* const data =useContext(UserContext); */
    const {user,setUser}=useUser()
    const [loding,setLoding]=useState(false)

const handleLogin =()=>{
    setLoding(true)
    setTimeout(()=>{
      setUser({id:1,name:"Monkey D Luffy"})  
      setLoding(false)
    },1500)
   
}
const handleLogout=()=>{

    setUser(null)
}
  return (
    <div>
        {!(user === null) ? <pre>{JSON.stringify(user)}</pre> :"please log-in"}
       
        
        <br />
        {
            !user &&<button onClick={handleLogin}> {loding ? "Loding" :"log in"}</button>
        }
        {
            user &&<button onClick={handleLogout}> logout</button>
        }

    </div>
  )
}
