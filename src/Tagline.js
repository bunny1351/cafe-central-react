import React from 'react'
import './home.css'

function Tagline() {
    let x = new Date();
    let day = x.getDay();
    let quote;
    switch (day) {
        case 0:
            quote = "Smooth out your day, every day.";
            break;
        case 1:
            quote = "Survive Monday, get coffee.";
            break;
        case 2:
            quote = "We make the mornings better. We make the nights longer";
            break;
        case 5:
            quote = "Behind every successful person is a substantial amount of coffee.";
            break;
        case 4:
            quote = "Every day is a coffee day.";
            break;
        case 3:
            quote = "Live, Love, Coffee.";
            break;
        case 6:
            quote = "For a more seductive coffee break.";
            break;
        default:
            quote = "You are on another planet";
    }  
    return(
        <div className= "tag">
        <h1>{quote}</h1>
        <div className="buttons">
            <button>Order Online</button>
            <button>Dine In</button>
        </div>
        </div>
    )
}

export default Tagline;