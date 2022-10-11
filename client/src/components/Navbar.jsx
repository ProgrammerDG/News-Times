import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"

function Navbar() {
    return (
        <>

            <nav id='navbarNav'>
                <div id='navbarNavDiv'>
                    <div><Link style={{ textDecoration: "none", color: "white", fontSize: "x-large" }} to="/">Home</Link></div>
                    <div><Link style={{ textDecoration: "none", color: "white", fontSize: "x-large" }} to="/sports">Sports</Link></div>
                    <div><Link style={{ textDecoration: "none", color: "white", fontSize: "x-large" }} to="/technology">Technology</Link></div>
                    <div><Link style={{ textDecoration: "none", color: "white", fontSize: "x-large" }} to="/entertainment">Entertainment</Link></div>
                    <div><Link style={{ textDecoration: "none", color: "white", fontSize: "x-large" }} to="/science">Science</Link></div>
                </div>
                <h1 id='navbarNavH1'>
                    @NEWS TIMES
                </h1>
            </nav>
        </>
    )
}

export default Navbar