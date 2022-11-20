import React from 'react'

function Header({number,object,increase}) {
    console.log("header");
  return (
    <div> {object.name} ({number})
    <br />
    <button onClick={increase}> click</button>
     
    </div>
  )
}

export default React.memo(Header)
