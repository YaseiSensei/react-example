import React, { useState } from 'react'

export default function ContactList({contacts}) {

   const [filterText, setFilterText] = useState("")
   
   const filtered=contacts.filter((item)=>{
    return Object.keys(item).some((key)=>{
      return  item[key].toString().toLowerCase().includes(filterText.toLowerCase());

    })
   })
   
   

  return (
    <div>
        <input placeholder='filter' value={filterText} onChange={(e)=>setFilterText(e.target.value)} />
    <ul className='list'>
        {filtered.map((c,i)=>(<li key={i}><span>{c.fullname}</span><span>{c.bounty}</span> </li>))}
    </ul>
    <p> Total Contacts : {filtered.length} </p>
    </div>
  )
}
