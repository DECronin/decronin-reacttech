import React from 'react';
import Logo from '../Logo';
import { Link } from "react-router-dom";

function Nav(){
    return(<>
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
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/potfolio" ? "nav-link active" : "nav-link"}>
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <a
              href="https://github.com/DECronin"
              target="_blank"
              className="github external nav-link">
              GitHub
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/dana-cronin-7623a5130"
              target="_blank"
              className="linkedin external nav-link">
              LinkedIn
            </a>
          </li>
          <li className="nav-item">
            <a
              href="./files/DECronin_Resume.pdf"
              target="_blank"
              className="resume external nav-link">
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a
              href="mailto: decronintech@gmailcom"
              target="_blank"
              className="gmail external nav-link">
              Gmail
            </a>
          </li>
        </ul>
      </div>
    </nav>
    </>)
}

export default Nav