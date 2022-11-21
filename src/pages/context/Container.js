import React, { useContext } from 'react'
import ContextFirstSample from './ContextFirstSample'
import ContextSecondSample from './ContextSecondSample'
import Profile from './Profile'
import TContext from './ThemeContext'
import './ThemeSample.css'

export default function Container() {
    const {theme} =TContext.useTheme()

  return (
    <div className={theme}>
      <ContextFirstSample />
      <ContextSecondSample />
      <hr />
      <Profile />
    </div>
  )
}
