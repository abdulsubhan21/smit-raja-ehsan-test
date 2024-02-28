import React from 'react'
import "../Css/Header.css"

const Header = () => {
    return (
        <nav className='navbar'>
            <div className='title'>JANELLE BROWN</div>
            <ul>
                <li>ABOUT</li>
                <li>WORK</li>
            </ul>
            <div className="connect">
                <div className='lc'>LET'S CONNECT</div>
                <div className="email-div">
                    <div className="email">waris@gmail.com</div>
                    <img src="../Images/copy.png" alt="copy" />
                </div>
            </div>
        </nav>
    )
}

export default Header
