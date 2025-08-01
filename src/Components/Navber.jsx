import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navber() {
    return <>
        <nav className="navbar navbar-expand-lg  color " data-bs-spy="scroll" data-bs-target="#navbar-example">
            <div className="container ">
                <Link className="navbar-brand text-white fs-2 " to="Home">Start Framework</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbar-example">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 ">
                        <li className="nav-item">
                            <NavLink className="nav-link  text-white fs-4 me-2" aria-current="page" to="About">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  text-white fs-4  me-2" aria-current="page" to="portfolio">portfolio</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link  text-white fs-4 me-2" aria-current="page" to="Contact">Contact</NavLink>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>



    </>
}
