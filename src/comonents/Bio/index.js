import React from 'react';
import './index.css';

function Bio() {
    return (<>
        <div class="container">

            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Dana Cronin</h1>
                    <img src="./files/ny-selfy.jpg" alt="my-face" id="bio-pic" />
                    <p class="lead">"There Are Three Types of People: Those Who Make Things Happen, Those Who Watch Things Happen, and Those Who Wonder What Happened."</p>
                    <p class="quote-source">--Nicholas Murray Butler</p>
                </div>
                <div class="container" id="content-center">
                    <div class="row">
                        <h2>About Me</h2>
                    </div>
                    <div id="bio-text">
                        <p>Multidisciplinary full stack web developer with mathematics, graphic design, and business development background. Proficiency in JavaScript, HTML5, CSS, React.js, SQL, Adobe Acrobat Pro DC, Databases, Heroku, Git, Node.js, Cheerio.js, Cypress, Microsoft Office Suite, Graphics Editing Software and responsive libraries.</p>
                        <p>Highly motivated innovative professional experienced in full stack project development, project management and team coordination. Outstanding problem-solving skills with a passion for generating work that exceeds the expectations of the client. Adept from prototype to implementation; ability to comprehensively remain focused on the client’s mission.</p>
                        <p>Positioned well to provide unique perspectives on end-user interactions for websites’ flow and logic by leveraging my expertise in liaison organization communications by applying elasticity to fresh concepts.</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Bio