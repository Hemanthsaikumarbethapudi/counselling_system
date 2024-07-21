import React from 'react'
import './login.css'
// import email_icon from '../Assests/email.png'
import password_icon from '../Assests/password.png'
import person_icon from '../Assests/person.png'

const login = () => {
    return (
        <div className="container">
            <div className="Header">
                <div className="text">
                    College Login
                </div>
                <div className="underline"></div>
                <div className="inputs">
                    <div className="input">
                        <img src={person_icon} alt="" />
                        <input type="text" />
                    </div>
                    <div className="input">
                        <img src={password_icon} alt="" />
                        <input type="password" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default login;