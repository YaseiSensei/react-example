import React, { useState } from 'react'
import Counter from './Counter';
import Input from './Input';

export default function State() {
    const [name,setName]=useState("Luffy");
    const [age, setAge] = useState(17)
    const [nakamatachi, setNakamatachi] = useState(["Zoro","Usopp"])
    const [role,setRole]=useState({title:"Captain",bounty:3000000});

  return (
    <div>
      <h1>Yoo {name}</h1><h2>{age}</h2>
      <button onClick={()=>setName("Monkey D Luffy")}>Change Name</button>
      <button onClick={()=>setAge(19)}>Change Age</button>
      <hr />
      <br />

      {nakamatachi.map((nakama,key)=><h3 key={key}>{nakama}</h3>)}
     
      <button  onClick={()=>setNakamatachi([...nakamatachi,"Nami"])}> new crew</button>

      <hr />
      <br />
      <h2>
        {role.title} {role.bounty}
      </h2>
      <button onClick={()=>setRole({...role,bounty:1100000})} > click</button>
      <hr />
      <Counter></Counter>
      <hr />
      <Input></Input>
    </div>
  )
}
