import React from 'react';
import "./Footer.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="Footer">
            <ul>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/kevin-nguyen-ba8b93194/"
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <FaLinkedin style={{ color: "#0077b5"}} size="2vw"/>
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/Kayvinh"
                        target="_blank" 
                        rel="noreferrer"
                    >
                        <FaGithub style={{ color: "#FFFFFF"}} size="2vw"/>
                    </a>
                </li>
            </ul>
        </div> 
    );
}
  
export default Footer;