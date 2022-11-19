import React, { useState } from 'react'

export default function Input() {
    const [form, setForm] = useState({name:"",tag:""})
   
   
    const onChangeInput=(e)=>{
        setForm({...form,[e.target.name]:e.target.value})
    }
  return (
    <div>
        <input name="name" value={form.name} onChange={onChangeInput} />
        <input name="tag"value={form.tag} onChange={onChangeInput} />
        <br />
        <hr />
        <h1>{form.name} {form.tag}</h1>
    </div>
  )
}
