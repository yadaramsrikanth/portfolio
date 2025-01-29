import React from "react"
import { FaUser } from "react-icons/fa";
import { MdEmail,MdLocationPin } from "react-icons/md";

import './index.css'

const Contact=()=>{
    return <>
    <h1 className="contact-heading">Contact</h1>
    <div className="address-section">
    <FaUser size={25}/>
    <div className="user-details-section">
        <p className="name-heading">Name</p>
        <p className="user-name">Srikanth Yadaram</p>
    </div>
    </div>
    <div className="address-section">
    <MdEmail size={34}/>
    <div className="user-details-section">
        <p className="name-heading">Email</p>
        <p className="user-name">yadaramsrikanth2000@gmail.com</p>
    </div>
    </div>
    <div className="address-section">
    <MdLocationPin size={25}/>
    <div className="user-details-section">
        <p className="name-heading">Address</p>
        <p className="user-name">Hyderabad, Telangana</p>
    </div>
    </div>
    
    </>
}

export default Contact