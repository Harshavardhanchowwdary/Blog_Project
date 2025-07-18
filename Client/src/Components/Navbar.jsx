import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <Link to='/'><a className="navbar-brand" href="#">Hummy Blogs</a></Link>
                <button className="navbar-toggler" id='coloricon' type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav m-auto text-center">
                        <Link to='/'><a className="nav-link active" href="#">Home <span className="sr-only">(current)</span></a></Link>
                        <Link to='/Register'><a className="nav-link active" href="#">Register</a></Link>
                        <Link to='/NewBlog'><a className="nav-link active" href="#">NewBlog</a></Link>
                        <Link to='/CategoryBlogs'><a className="nav-link active" href="#">CategoryBlogs</a></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar