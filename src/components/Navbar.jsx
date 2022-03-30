import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav" style={{ gap: "10px" }}>
                        <Link to="/" style={{ color: "red" }}>Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to='/register'>Register</Link>
                        <Link to='/products'>Product</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}
