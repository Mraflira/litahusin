import React, { useState } from 'react'; 
import About from './popup/about';
import Contact from './popup/contact';
import Image from 'next/image';

function Sidebar(){
    const [show, setShow] = React.useState();
    const [AboutShow, setAboutShow] = React.useState();
    const [ContactShow, setContactShow] = React.useState(); 

    return(
        <>
            <div className="sidebar-menu" id="sidebar-menu">
                <div id="show" className={show ? "show-menu" : "hide-menu"}>
                    <button className="toggle" onClick={()=> setShow(!show)}>Menu</button>
                    <div>
                        <div className="menu-box">
                            <ul>
                                <li><button className="popup-btn5" onClick={()=> setAboutShow(true)}>About</button></li>
                                <li><button className="popup-btn6" onClick={()=> setContactShow(true)}>Contact</button></li>
                                <li>Gallery</li>
                            </ul>
                        </div>
                    </div>
                </div>
           </div>

           <div className={AboutShow ? "show-popup" : "hide-popup"}>
                <About/>
                <button className="button-popup button-popup-about" onClick={()=> setAboutShow(false)}><Image src="/image/close-black.png" layout='fill' objectFit='fit' className="close-image" /> </button>
           </div>

           <div className={ContactShow ? "show-popup" : "hide-popup"}>
                <Contact/>
                <button className="button-popup button-popup-contact" onClick={()=> setContactShow(false)}><Image src="/image/close-black.png" layout='fill' objectFit='fit' className="close-image" /> </button>
           </div>
        </>
    );
}

export default Sidebar;