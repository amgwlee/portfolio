import React from 'react';
import NavigationTabs from './components/NavigationTabs';
import './custom.css';
import About from './components/About';
import Home from './components/Home';
import Portfolio from './components/Portfolio';


function App() {
    const tabs = [
        {
            id: 'home',
            label: 'Home',
            content: <Home />
        },
        {
            id: 'about',
            label: 'About',
            content: <About />
        },
        {
            id: 'portfolio',
            label: 'Portfolio',
            content: <Portfolio />
        },
    ]
    return (
        <div className="App">
        <h1>Aaron's Website</h1>
            <NavigationTabs tabs={ tabs } />
        </div>
    );
}

export default App;
