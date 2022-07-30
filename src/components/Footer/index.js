import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
    return(
        <div className="footer" id="footer">
            <div className="footer-link">
                <a href="https://github.com/tljurecki" target="_blank" rel="noopener noreferrer"><img src={require("../../assets/images/github.png")} alt="GitHub" className="icon"/></a>
                <a href="https://www.linkedin.com/in/tanya-jurecki-39970b244/" target="_blank" rel="noopener noreferrer" ><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" className="icon"/></a>      
            </div>
            <p className="footer-contact text-info">
                &copy; Tanya Jurecki  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
            </p>
        </div>
    )
}

export default Footer;