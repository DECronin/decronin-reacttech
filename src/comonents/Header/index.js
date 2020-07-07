import React from 'react';
import Nav from '../Nav';

function Header() {
return (<>
    <Nav />
    <header className="row justify-content-center">
        <div className="col-lg-2 hidden-md-down"></div>
        <div className="col-lg-3 col-md-6">
            <img src="./files/0sm-dec.jpg" alt="my-face" id="bio-pic" />
        </div>
        <div className="col-lg-2 col-md-6 h-name">
            <h1 className="display-4">Dana Cronin</h1>
        </div>
        <div className="col-lg-4 col-md-12 h-quote">
            <p className="lead">"There Are Three Types of People: Those Who Make Things Happen, Those Who Watch Things Happen, and Those Who Wonder What Happened."</p>
            <p className="quote-source">--Nicholas Murray Butler</p>
        </div>
        <div className="col-lg-1 hidden-md-down"></div>
    </header>
</>)
}

export default Header