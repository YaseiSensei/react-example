import React from 'react'
import TContext from './ThemeContext'

export default function ContextFirstSample() {

    const {theme,setTheme} = TContext.useTheme()

  return (
    <div>
        theme color : {theme}
        <br />
        <button onClick={()=>setTheme(theme==="dark"?"light":"dark")}> click</button>
        </div>
  )
}
