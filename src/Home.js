import React from 'react'
import './home.scss'
import logo from './cafe-central-logo.png'
import Tagline from './Tagline'

function Home() {
    return (
        <main>
            <img src={logo} alt="main logo" />
            <Tagline />
        </main>
    )
}

export default Home;