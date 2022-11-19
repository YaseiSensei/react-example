import React, { useEffect, useState } from 'react'
import ContactForm from './ContactForm'
import ContactList from './ContactList'
import "./Contacts.css"

export default function Contacts() {
    const [contacts, setContacts] = useState([
        {fullname:"Monkey D Luffy",bounty:"3.000.000"},
        {fullname:"Roronoa Zoro",bounty:"1.110.000"},
        {fullname:"Jimbe",bounty:"1.100.000"},
        {fullname:"Sanji",bounty:"1.000.000"}])

    useEffect(() => {
      
    
      
    }, [contacts])
    
    
  return (
    <div id="container">
        <h1>Contacts</h1>
        <ContactList contacts={contacts} />
        <ContactForm  addContact={setContacts} contacts={contacts}/>
    </div>
  )
}
