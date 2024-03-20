import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="navbar-brand" to={"/"}>Users Portal</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={"/create"}>Add User</Link>
                </li>
            </ul>
            <input className="form-control me-2 w-50" type="search" placeholder="Search" aria-label="Search"/>
            </div>
        </div>
        </nav>
    </>
  )
}

export default Navbar
