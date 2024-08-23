import React from 'react'

export default function Navbar({logo, menuItems}) {
  return (
    <nav className='navbar container' >
      <img className='logo' src={logo} alt="logo" />
      <ul className='nav_list'>
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <button className='nav_button'>Связаться</button>
    </nav>
  )
}
