import React from 'react'
import First from './firstComponent/First'
import Fourth from './fourthComponent/Fourth'
import Second from './secondComponent/Second'
import Third from './thirdComponent/Third'

export default function CssModuleApp() {
  return (

    <div  style={{backgroundColor :'grey',fontFamily:"monospace",borderRadius:"10px",minHeight:"100px",minWidth:"120px",position:"relative"
    ,padding:"20px"}} >

         <First  />
         <Second />
         <Third />
         <Fourth />

    </div>
  )
}
