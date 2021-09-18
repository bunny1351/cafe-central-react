import React from 'react'
import './about.scss'
import logo1 from './timeline.png'
import logo2 from './location.png'
import logo3 from './restaurant.png'
function About() {
    return (
        <div className="about">
            <h1>About Us</h1>
            <div className="content">
                <div className="container">
                    <img src={logo1} alt="timeline" />
                    <h2>HISTORY</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem turpis, venenatis vitae porta vel, tincidunt sed arcu. Nulla quis ornare urna. Proin eu felis vitae enim mollis tempus ut sed lectus.</p>
                </div>
                <div className="container">
                    <img src={logo2} alt="timeline" />
                    <h2>LOCATION</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem turpis, venenatis vitae porta vel, tincidunt sed arcu. Nulla quis ornare urna. Proin eu felis vitae enim mollis tempus ut sed lectus.</p>
                </div>
                <div className="container">
                    <img src={logo3} alt="timeline" />
                    <h2>SPECIALITY</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lorem turpis, venenatis vitae porta vel, tincidunt sed arcu. Nulla quis ornare urna. Proin eu felis vitae enim mollis tempus ut sed lectus.</p>
                </div>
            </div>
        </div>
    )
}

export default About;