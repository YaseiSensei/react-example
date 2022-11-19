import React, { useState }  from 'react'
import Counter from './Counter'


export default function UseEffect() {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>

     {isVisible &&<Counter />}
     
     <button onClick={()=>setIsVisible(!isVisible)} > Toggle Counter</button>
    </div>
    
  )
}
