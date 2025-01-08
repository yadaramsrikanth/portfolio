import React,{useState}from "react"
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";


import "./index.css"
const Header =()=>{
    const [BoolValue,setBoolValue]=useState(false)
    console.log(BoolValue)
return <nav className="nav-bar">
    <h2 className="logo">{ `{SRIKANTH}` }</h2>
    <ul className="desktop-menu-items">
        <li className="list-item"><a className="header-item" href="#Home">Home</a></li>
        <li className="list-item"><a className="header-item" href="#About">About</a></li>
        <li className="list-item"><a className="header-item"  href="#Skills">Skills</a></li>
        <li className="list-item"><a className="header-item" href="#Projects">Projects</a></li>
        <li className="list-item"><a className="header-item" href="#Contact">Contact</a></li>
    </ul>
    {!BoolValue&&<button type="button " className="hamburger-icon" onClick={()=>setBoolValue(true)}><RxHamburgerMenu size={32}/> 
    </button>}
    {BoolValue&&<ul className="mobile-menu-items">
         <button type="button" className="hamburger-icon cancel-button" onClick={()=>setBoolValue(false)}><MdOutlineCancel size={28}/></button>
       <li className="list-item"><a className="mob-header-item" href="#Home">Home</a></li>
        <li className="list-item"><a className="mob-header-item" href="#About">About</a></li>
        <li className="list-item"><a className="mob-header-item"  href="#Skills">Skills</a></li>
        <li className="list-item"><a className="mob-header-item" href="#Projects">Projects</a></li>
        <li className="list-item"><a className="mob-header-item" href="#Contact">Contact</a></li>
    </ul>}

</nav>
}
export default Header