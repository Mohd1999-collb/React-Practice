import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Blog from './Blog'
import Contact from './Contact'
import Nav from './Nav'

const Navbar = () => {
  return (
    <div>
        <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    </div>
  )
}

export default Navbar