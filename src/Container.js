import React from "react"
import "./main.css"
import Profile from "./pfp.jpg"
import About from "./About"
import Footer from "./Footer"
export default function Container  (){
    return (
        <div className="box center">
          <div class="align">
          <img src= {Profile} className="pfp" />
          </div> 
          <div className="desc">
          <h1 className="name">Jaydeep Singh</h1>
          <h2 className="desig">Assistant General Manager Treasury amd Corp Finance at Al Futtaim Group Real Estate</h2>
          <a href="mailto:singh.jaydeep@gmail.com" target="blank">
          <button> Email </button> 
          </a>
          <About />
          </div>
          <Footer />
          
        </div>
    )
}