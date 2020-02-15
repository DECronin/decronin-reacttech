import React from 'react';
import Logo from '../Logo';
import { FaGithub, FaLinkedin, FaFilePdf, FaEnvelope, FaBriefcase, FaUser} from "react-icons/fa";  // Font Awesome
import { Link } from "react-router-dom";

function Nav() {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand logo root" to="/">
                <Logo />
            </Link>
            <div>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link
                            to="/about"
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
                            href="https://github.com/DECronin"
                            target="_blank"
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
                            className="resume external nav-link">
                            <FaFilePdf
                                color="#008f68"
                                size="50px"
                                style={{ margin: '0 5px' }}
                            />
            </a>
                    </li>
                    <li className="nav-item">
                        <a
                            href="mailto: decronintech@gmailcom"
                            target="_blank"
                            className="gmail external nav-link">
                            <FaEnvelope
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