import React from 'react'
import Header from './Header';
import User from './User';

export default function Entrance() {
    const nakamatachi=[{id:1,name:"Zoro"},{id:2,name:"Nami"},{id:3,name:"Usopp"},{id:4,name:"Sanji"},{id:5,name:"Robin"}];
  return (
    <div>
      <Header></Header>
    <User name="Luffy" surname="Monkey D " isLoggedIn={true}  age={"19"} nakamatachi={nakamatachi} address={{title: "East Blue",bounty:3000000}} />
    </div>
  )
}
