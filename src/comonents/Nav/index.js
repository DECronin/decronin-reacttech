import React from 'react';
import { FaHome, FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaBriefcase, FaUser} from "react-icons/fa";  // Font Awesome
import { Link } from "react-router-dom";


function Nav() {
    function viewPort(){
        let device = window.innerWidth;
        console.log("viewport " + device);
        console.log("type " + typeof(device));
        if (device > 950){
            console.log('big'); 
            return "50px";
        } else if (device > 600){
            console.log('med'); 
            return "45px";
        } else {
            console.log('def'); 
            return "30px";
        }
    }
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center row navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/about"
                            title="About Me"
                            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                            <FaUser
                                color="#008f68"
                                size={viewPort()}
                                style={{ margin: '0 5px' }}
                            />
            </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to="/portfolio"
                            title="Portfolio"
                            className={window.location.pathname === "/potfolio" ? "nav-link active" : "nav-link"}>
                            <FaBriefcase
                                color="#008f68"
                                size={viewPort()}
                                style={{ margin: '0 5px' }}
                            />
            </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            href="mailto: decronintech@gmailcom"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Email Me"
                            className="gmail external nav-link">
                            <FaEnvelope
                                color="#008f68"
                                size={viewPort()}
                                style={{ margin: '0 5px' }}
                            />
            </a>
                    </li>
            <Link className="navbar-brand logo root" to="/" title="Home">
                <FaHome 
                    color="#008f68"
                    size={viewPort()}
                    title="Badges"
                    style={{ margin: '0 5px' }}
                />
            </Link>
                    <li className="nav-item">
                        <a
                            href="https://github.com/DECronin"
                            target="_blank"
                            title="GitHub"
                            rel="noopener noreferrer"
                            className="github external nav-link">
                            <FaGithub
                                color="#008f68"
                                size={viewPort()}
                                style={{ margin: '0 5px' }}
                            />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://www.linkedin.com/in/decronin"
                            target="_blank"
                            title="LinkedIn"
                            rel="noopener noreferrer"
                            className="linkedin external nav-link">
                            <FaLinkedin
                                color="#008f68"
                                size={viewPort()}
                                style={{ margin: '0 5px' }}
                            />
            </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="./files/DECronin_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Resume"
                            className="resume external nav-link">
                            <FaFilePdf
                                color="#008f68"
                                size={viewPort()}
                                style={{ margin: '0 5px' }}
                            />
            </a>
                    </li>
        </nav>
    </>)
}

export default Nav