import React from 'react';
import './app.scss';
import Navbar from './Navbar';
import { Switch, Route } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Menu from './Menu'
import Contact from './Contact'

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/menu" component={Menu} />
                <Route path="/contact" component={Contact} />
            </Switch>
            <footer>
                <span>&copy; Bhupender Singh</span>
            </footer>
        </div>
    )
}
export default App

