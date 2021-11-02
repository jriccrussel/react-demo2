import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="menu">
                <div className="menu__logo">
                    <Link to="/">kd</Link>
                </div>
                <div className="menu__items">
                    <div className="menu__items-link">
                        <NavLink to="/projects" ctiveClassName="active">Projects</NavLink>
                    </div>
                    <div className="menu__items-link">
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar