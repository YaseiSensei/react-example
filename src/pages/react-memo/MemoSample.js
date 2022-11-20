import React, { useCallback, useMemo, useState } from 'react'
import Header from './Header'

export default function MemoSample() {
    const [number, setNumber] = useState(0)

    const obj=useMemo(()=>{
        return {name:"Luffy"}
    },[])

   const increaseNumber=useCallback(()=>{setNumber((prevState)=>prevState+1)},[])
   

    return (
        <div>
            <Header number={number < 10 ? 0 : number}  object={obj}  increase={increaseNumber}  />
            <br />
            <pre> {number}</pre>
           

        </div>
    )
}
