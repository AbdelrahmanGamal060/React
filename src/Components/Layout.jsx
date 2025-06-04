import React from 'react'
import Footer from './Footer'
import Navber from './Navber'
import About from './About'
import Portfolio from './Portfolio'
import Contact from './contact'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return <>
        <Navber />


        <Outlet />


        <Footer />
    </>
}
