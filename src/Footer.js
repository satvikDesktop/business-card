import React from "react"
import "./main.css"
import Linkedin from "./linkedin.png"
export default function Footer (){
    return (
        <div className="footer">
            <div class="foot">
                <a href="https://www.linkedin.com/in/jaydeep-singh-cfa-0898a79/" target="blank" className="center">
                <img src={Linkedin} className="links" />
                </a>
            </div>
        </div>
    )
}