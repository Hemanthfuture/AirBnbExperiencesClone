import React from "react";
import ReactDOM from 'react-dom/client';
import "./style.css";

export default function Navbar(){
    return(
        <div className="nav-container">
                <img src="/images/airbnb-logo.png" alt="Airbnb Logo"  className="nav-logo"/>
                <div className="nav-btns">
                <button className="nav-btn">Home</button>
                <button className="nav-btn">Services</button>
                <button className="nav-btn">Contact Us</button>
                </div>
        </div>
    )
}