import React from 'react'
import First from './first/First'
import Fourth from './fourth/Fourth'
import Second from './second/Second'
import Third from './third/Third'

export default function CssModule() {
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
