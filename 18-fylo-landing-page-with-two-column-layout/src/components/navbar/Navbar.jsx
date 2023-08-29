import React from 'react'
import HeaderLogo from '../../images/logo.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <header>

        <div><img src={HeaderLogo} alt="logo" id="logo" /></div>

        <div>
            <nav>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Team</a></li>
                <li><a href="#">Sign In</a></li>
              </ul>   
            </nav>
        </div>

      </header>
    </>
  )
}

export default Navbar