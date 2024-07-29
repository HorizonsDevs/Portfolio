import React from 'react'
import {MenuData} from './MenuData'
import"./css/navbarstyles.css"
import {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";


export default function Navbar() {
  const [clicked, setClicked] = useState(false)
  return (
   
    <nav className="NavbarItems"> 
    
    <h1 className = "logo">
      <img src="/img/logo.svg" alt="" style={{width:'60px', height:'100%', objectFit:'cover'}}/>
       <i className= "fab fa-rect"></i> 
    </h1>

    <div onClick={()=> setClicked(!clicked)} className = "menu-icons" style={{cursor: 'pointer'}}>
    {/* <i className = {clicked? "fas fa-times": "fas fa-bars"}></i> } esto es el icono del hamburger */}
    {clicked?
       <IoCloseSharp style={{color:'white'}}/>: <RxHamburgerMenu style={{color:'white'}}/>
     
    }

    </div>
    
    <ul className={(clicked)? "nav-menu active" : "nav-menu" }>
      
    {MenuData.map((item, index)=> {
      return (
      <li key ={index}>
        <a href={item.url}
          className={item.cName}>
          <i className={item.icon}></i> {item.title}
          </a> 
      </li>
      );
    })}
      </ul> 
    </nav> 
  )
}
