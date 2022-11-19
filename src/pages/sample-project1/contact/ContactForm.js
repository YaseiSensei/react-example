import React, { useEffect, useState } from 'react'
import "./Contacts.css"

const initialFormValues={fullname:"",bounty:""}
export default function ContactForm({addContact,contacts}) {

    const [form, setForm] = useState(initialFormValues)

    useEffect(()=>{

       setForm(initialFormValues)
    },[contacts])

    const onChangeInput =(e)=>{
        setForm({...form,[e.target.name]: e.target.value})
    }

    const onSubmit=(e)=>{
        e.preventDefault();

        if(form.fullname === ""||form.bounty ==="")return false;
       
        addContact([...contacts,form]);

        
    }
  return (
    <form onSubmit={onSubmit}>
      
      <input name="fullname" value={form.fullname} placeholder='Name' onChange={onChangeInput} />
      <br />
      <input name="bounty" value={form.bounty} placeholder='Bounty' onChange={onChangeInput}/>
      <br />
      <button id='btn' >Add</button>
    </form>
  )
}
