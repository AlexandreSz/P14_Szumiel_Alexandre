import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import './header.css'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Logo Wealth Health" />
      </Link>
      <h1 className="title"> WEALTH HEALT</h1>
    </header>
  )
}

export default Header
