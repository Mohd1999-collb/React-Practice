import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div style={{display: 'flex', width: "50vw", justifyContent: "space-between", fontSize: "25px"}}>

        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
    </div>
  )
}

export default Nav