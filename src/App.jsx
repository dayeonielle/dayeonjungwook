import React from 'react';
import Header from './components/Header';
import EventInfo from './components/EventInfo';
import Location from './components/Location';
import Footer from './components/Footer';
import './App.css';

function App() {
    return (
        <div className="app">
            <Header />
            <EventInfo />
            <Location />
            <Footer />
        </div>
    );
}

export default App;
