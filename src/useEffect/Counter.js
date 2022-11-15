import React, { useEffect, useState } from 'react'

export default function Counter() {
    const [number, setNumber] = useState(0)
  /* const [name, setName] = useState("Luffy") */
  
  useEffect(()=>{
    console.log("Component mounted ");

   const interval= setInterval(() => {
        setNumber((n)=>n+1)
    }, 1000);

    return()=> clearInterval(interval)
  },[])

  useEffect(()=>{
    console.log("number stated");
  },[number])

  /* useEffect(()=>{
    console.log("name stated ");
  },[name,number]) */
  return (
    <div>

<h1>{number}</h1>
      <button onClick={()=>setNumber(number+1)} > Click</button>
      <hr />
     {/*  <h1>{name}</h1>
      <button onClick={()=>setName("Zoro")} > Click</button> */}
    </div>
  )
}
