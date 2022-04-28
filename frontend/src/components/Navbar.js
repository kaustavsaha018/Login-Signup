import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/some/valid/uri">
      <img className='nav-logo' src={logo} alt="Nax-Logo" />
    </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-Link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-Link" to="/signup">Registration</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar