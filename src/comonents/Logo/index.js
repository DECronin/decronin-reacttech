import React from 'react';

function Logo(){
    return(<>
        <div className="logo-tech-links containder">
            <h1 className="row justify-content-center">Technologies Badges:</h1>
            <div className="row">
                <a className="col-2" title="HTML 5" href="https://www.w3schools.com/html/html5_intro.asp"><img className="tect-badge" src="./files/html5.png" alt="html5" /></a>
                <a className="col-2" title="Firebase" href="https://firebase.google.com/"><img className="tect-badge" src=".\files\firebase.png" alt="firebase" /></a>
                <a className="col-2" title="CSS" href="https://www.w3schools.com/css/"><img className="tect-badge" src="./files/css.png" alt="css" /></a>
                <a className="col-2" title="JavaScript" href="https://www.javascript.com/"><img className="tect-badge" src="./files/js.png" alt="js" /></a>
                <a className="col-2" title="Microsoft Office Suite" href="https://www.microsoft.com/en-us/"><img className="tect-badge" src="./files/office.png" alt="microsoft" /></a>
                <a className="col-2" title="Node.js" href="https://nodejs.org/en/"><img className="tect-badge" src="./files/node.png" alt="node" /></a>
            </div>
            <div className="row">
                <a className="col-2" title="React.js" href="https://reactjs.org/"><img className="tect-badge" src=".\files\reactjs-logo.jpg" alt="react" /></a>
                <a className="col-2" title="MySQL" href="https://www.mysql.com/"><img className="tect-badge" src="./files/my-sql.png" alt="my-sql" /></a>
                <a className="col-2" title="JSON" href="https://www.json.org/json-en.html"><img className="tect-badge" src="./files/json.png" alt="json" /></a>
                <a className="col-2" title="MongoDB" href="https://www.mongodb.com/"><img className="tect-badge" src="./files/MongoDB.jpg" alt="mongo" /></a>
                <a className="col-2" title="Express-Handlebars" href="https://www.npmjs.com/package/express-handlebars"><img className="tect-badge" src="./files/handlebars_logo.png" alt="handlebars" /></a>
                <a className="col-2" title="Express" href="http://expressjs.com/"><img className="tect-badge" src="./files/express.png" alt="express" /></a>
            </div>
            <div className="row">
                <a className="col-2" title="Heroku"href="https://www.heroku.com/"><img className="tect-badge" src="./files/heroku.png" alt="heroku" /></a>
                <a className="col-2" title="Bootstrap" href="https://getbootstrap.com/"><img className="tect-badge" src="./files/bootstrap.png" alt="bootstrap" /></a>
                <a className="col-2" title="MaterializeCSS" href="https://materializecss.com/"><img className="tect-badge" src="./files/mat-css.png" alt="materialize" /></a>
                <a className="col-2" title="Paint Tool SAI" href="https://www.systemax.jp/en/sai/"><img className="tect-badge" src="./files/ptsai.png" alt="P.T.SAI" /></a>
                <a className="col-2" title="Gimp" href="https://www.gimp.org/"><img className="tect-badge" src="./files/gimp.png" alt="gimp" /></a>
                <a className="col-2" title="Java" href="https://www.java.com/en/"><img className="tect-badge" src="./files/java.png" alt="java" /></a>
            </div>
        </div>
    </>)
}

export default Logo