import React from 'react'
import Logo from '../header/Logo'
import Menu from '../header/Menu'
import SNS from '../header/SNS'

const Header = () => {
  return (
    <header id='header' role='banner'>
      <Logo/>
      <Menu/>
      <SNS/>
    </header>
  )
}

export default Header