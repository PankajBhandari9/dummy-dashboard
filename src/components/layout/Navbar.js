import React from 'react'
import { NavLink } from 'react-router-dom';
import "./Navbar.css";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">Themes</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/" exact>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="contact" exact>Contact</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about" exact>About</NavLink>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <NavLink className="btn btn-light mx-1" to="/login">Login</NavLink>
                            <NavLink className="btn btn-outline-light mx-1" to="register">Register</NavLink>
                        </div>
                    </div>

                </div>
            </nav>

        </div>
    )
}

export default Navbar
