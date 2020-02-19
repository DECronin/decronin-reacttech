import React from 'react';
import { FaHome, FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaBriefcase, FaUser} from "react-icons/fa";  // Font Awesome
import { Link } from "react-router-dom";

function Nav() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-center circular-menu">
            <Link className="navbar-brand logo root" to="/" title="Home">
                <FaHome 
                    color="#008f68"
                    size="50px"
                    style={{ margin: '0 5px' }}
                />
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/about"
                            title="About Me"
                            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                            <FaUser
                                color="#008f68"
                                size="50px"
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
                                size="50px"
                                style={{ margin: '0 5px' }}
                            />
            </Link>
                    </li>
                    <li className="nav-item">
                        <a
                            href="mailto: decronintech@gmailcom"
                            target="_blank"
                            title="Email Me"
                            className="gmail external nav-link">
                            <FaEnvelope
                                color="#008f68"
                                size="50px"
                                style={{ margin: '0 5px' }}
                            />
            </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://github.com/DECronin"
                            target="_blank"
                            title="GitHub"
                            className="github external nav-link">
                            <FaGithub
                                color="#008f68"
                                size="50px"
                                style={{ margin: '0 5px' }}
                            />
                        </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="https://www.linkedin.com/in/dana-cronin-7623a5130"
                            target="_blank"
                            title="LinkedIn"
                            className="linkedin external nav-link">
                            <FaLinkedin
                                color="#008f68"
                                size="50px"
                                style={{ margin: '0 5px' }}
                            />
            </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="./files/DECronin_Resume.pdf"
                            target="_blank"
                            title="Resume"
                            className="resume external nav-link">
                            <FaFilePdf
                                color="#008f68"
                                size="50px"
                                style={{ margin: '0 5px' }}
                            />
            </a>
                    </li>
                </ul>
            </div>
        </nav>
    </>)
}

export default Nav