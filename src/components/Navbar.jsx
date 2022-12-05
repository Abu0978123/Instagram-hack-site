import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <nav id="navbar" className="navbar navbar-expand-lg ">
    <div className="container">
       <Link to={'/'} className="navbar-brand text-danger">Instagram Followers.</Link> 
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/free-followers">Free Followers</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/buy-followers">Buy Followers</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/about">About us</Link>
                </li>
                <li className="nav-item">
                </li>
            </ul>
            {/* <ul className="navbar-nav flex-row">  
                <li className="nav-item">
                    <Link className="social-icon rounded-3" href="#"><BsDribbble/></Link>
                </li>
                <li className="nav-item">
                    <a className="social-icon rounded-3" href="https://www.github.com/Abu0978123"><BsGithub/></a>
                </li>
                <li className="nav-item">
                    <a className="social-icon rounded-3" href="https://www.instagram.com/itx__abu"><BsInstagram/></a>
                </li>
                <li className="nav-item">
                    <a className="social-icon rounded-3" href="#"><CiYoutube /></a>
                </li>
            </ul> */}
        </div>
    </div>
</nav>
</div>
  )
}
