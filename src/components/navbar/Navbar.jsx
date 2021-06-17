import React from 'react';
import "./navstyles.css";
import GhanaFlag from "../../Images/ghana.png"
import NigerianFlag from "../../Images/nigeria.png"
import KenyanFlag from "../../Images/kenya.png"
import LogoImg from "../../Images/hori.png"


const Navbar = () => {
    return (
        <div>
             <div className="container-fluid my_navbar_container">


                <nav className="navbar navbar-default my_navbar">
                            <div className="container-fluid">
                            
                                <div className="navbar-header">

                                <a className="navbar-brand brand_logo_container" href="#"> <img src={LogoImg} alt="" className = "brand_logo"/> </a>


                                </div>


                            
                                    <ul className="nav navbar-nav navbar-right nav_links">
                                        <li><a href="https://horizonsoffices.com/nigeria/about-us/">About Us</a></li> 
                                    </ul>

                            
                                    <div className="text-center flags_container">
                                    <a href="https://www.horizonsoffices.com/ghana/" >  <img src={GhanaFlag} alt="" className = "flags"/>   </a>
                                    <a href="https://horizonsoffices.com/nigeria/">   <img src={NigerianFlag} alt="" className = "flags"/>   </a>
                                    <a href="https://kenya.horizonsoffices.com/" >   <img src={KenyanFlag} alt="" className = "flags"/>   </a>
                                    </div> 
                                    
                        </div>
                </nav>

                </div>
        </div>
    );
}

export default Navbar;
