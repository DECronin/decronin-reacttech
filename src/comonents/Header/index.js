import React from 'react';
import Nav from '../Nav';

function Header() {
return (<>
    <Nav />
    <header className="row justify-content-center">
        <div className="col-2"></div>
        <div className="col-3">
            <img src="./files/0sm-dec.jpg" alt="my-face" id="bio-pic" />
        </div>
        <div className="col-2 h-name">
            <h1 class="display-4">Dana Cronin</h1>
        </div>
        <div className="col-4 h-quote">
            <p class="lead">"There Are Three Types of People: Those Who Make Things Happen, Those Who Watch Things Happen, and Those Who Wonder What Happened."</p>
            <p class="quote-source">--Nicholas Murray Butler</p>
        </div>
        <div className="col-1"></div>
    </header>
</>)
}

export default Header