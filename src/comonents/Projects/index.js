import React, { useEffect, useState } from 'react';
import './index.css';
import {FaAngleDoubleRight, FaAngleDoubleLeft, FaGithub, FaGlobeAmericas} from "react-icons/fa";

const portfolio = [{
  title: "CommuniTI",
  imgSrc: "./files/communicate-1151283_1280.jpg",
  imgAlt: "Communi T I",
  desc: 'A psudo-anonymous forum-style community to reenforce/promote healthy communication skills and societal understandings without biases or aggression for the sake of personal growth.',
  tech: ["React.js", "JS", "Sequelize", "MySQL", "Morgan", "Axios", "Express", "JawsDB"],
  urlGH: 'https://github.com/DECronin/CommuniTI',
  urlDep: "https://communi-t-i.herokuapp.com/"
},{
  title: "Empty Kitchen",
  imgSrc: "./files/food.jpg",
  imgAlt: "Rutgers Info Widget",
  desc: '#E-Kitchen =:= Recipe and Tutorial Finder for the Home-Base Chef with Limited Resources / Ingredients.',
  tech: ["HTML", "CSS", "JS", "jQuery", "Materialize", "Glide.js", "Firebase", "Youtube Data API", "Spoonacular API"],
  urlGH: 'https://github.com/DECronin/project-one-ddb',
  urlDep: "https://decronin.github.io/project-one-ddb/"
}, {
  title: "Cypher-Text",
  imgSrc: "./files/firewall-994x400.jpg",
  igAlt: "cypher-text",
  desc: 'Virtual Room(s) Generator and Connection Persistance to play a version of "Codenames" with 2 teams in both "Agent" and "Guest" Views.',
  tech: ["Bootstrap", "Node", "Express", "Handlebars", "MySQL", "Seqelize", "JawsDB", "Socket.io", "ESLint"],
  urlGH: 'https://github.com/DMcCulloch-Coder/cypher-text',
  urlDep: "https://cypher-text.herokuapp.com/"
}, {
  title: "Employee Directory",
  imgSrc: "./files/emp-dir-ss.jpg",
  imgAlt: "Employee Directory Template",
  desc: "Template made primarily with React.js for Sorting and Filtering your chosen Database by All Categories. (Deployed Example Employee Information Provided By: Arron J. Hunt & Keith Armstrong's  `Random User Generator` API)",
  tech: ["React.js", "Node", "Bootstrap", "Axios", "Random User API", "FA Icons", "JS"],
  urlGH: 'https://github.com/DECronin/employee-directory',
  urlDep: "https://decronin-employeedirectory.herokuapp.com/"
}, {
  title: "MongNews",
  imgSrc: "./files/newspaper-1.jpg",
  imgAlt: "Mongo Scraper",
  desc: 'Cheerio and MongoDB Web-Scraping tool pulling articles from the NewYorkTimes Home Page listing from older to newer. Able to be commented on and maneuvered between "Saved" and "Unsaved" listings.',
  tech: ["Cheerio", "MongoDB", "Mongoose", "JS", "Axios", "New York Times", "Express", "Handlebars"],
  urlGH: 'https://github.com/DECronin/MongNews',
  urlDep: "http://mongnews.herokuapp.com/"
}, {
  title: "Gif Searcher",
  imgSrc: "./files/searching.jpg",
  imgAlt: "Giphy",
  desc: 'Giphy Database Search-Engine style website with 7 default animal-themed buttons where searching a new parameter creates a new button as well as being able to click to start and/or pause gifs in listed 10 results.',
  tech: ["Giphy API", "HTML", "jQuery", "Bootstrap", "JS"],
  urlGH: 'https://github.com/DECronin/Gif-Searcher',
  urlDep: "https://decronin.github.io/Gif-Searcher/"
}]

function Projects() {

  const [state, setThisState] = useState({
    displayingIndex: 0,
    currentCard: <><p>Loading</p></>
  })
  // When the component mounts, a call will be made to get random users.
  useEffect(() => {
    buildDisplayFocus();
  }, [state.displayingIndex]);

  function nextUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex >= portfolio.length) {
      userIndex = 0;
    }
    // setUser(users[userIndex]);
    setThisState({...state,
      displayingIndex: userIndex
    })
  }

  function previousUser(userIndex) {
    // Ensure that the user index stays within our range of users
    if (userIndex < 0) {
      userIndex = portfolio.length - 1;
    }
    // setUser(users[userIndex]);
    setThisState({...state,
      displayingIndex: userIndex
    })
  }

  function handleBtnClick(btnName) {
    if (btnName === "next") {
      const newUserIndex = state.displayingIndex + 1;
      nextUser(newUserIndex);
    } else {
      const newUserIndex = state.displayingIndex - 1;
      previousUser(newUserIndex);
    }
  }

  function displayTechList(tech){
    let list = tech.map(i => {
      return (tech.indexOf(i) < tech.length-2) ? `${i}, ` :
      (tech.indexOf(i) < tech.length-1) ? 
         `${i} and ` : `${i}.`})
      return list
  }

  function buildDisplayFocus(){
    console.log(`line 84?`)
    setThisState({
      ...state, currentCard:
        <>
          <div className="row full-slider">
            <button className="col-3 btn" onClick={() => handleBtnClick("back")}>
              <FaAngleDoubleLeft
                color="#f8f9fa"
                size="50px"
                style={{ margin: '0 5px' }} />
            </button>
            <div className="col-6 current-card">
                <h2 className="row justify-content-center project-title">
                  <a href={portfolio[state.displayingIndex].urlDep}>
                    <FaGlobeAmericas
                      color="#f8f9fa"
                      size="40px"
                      style={{ margin: '0 15px' }}
                     /></a>
                  <h1>{portfolio[state.displayingIndex].title}</h1>
                  <a href={portfolio[state.displayingIndex].urlGH}>
                    <FaGithub
                      color="#f8f9fa"
                      size="40px"
                      style={{ margin: '0 15px' }}
                    /></a>
                </h2>
                <img src={portfolio[state.displayingIndex].imgSrc} alt={portfolio[state.displayingIndex].imgAlt} className="work row" />
                <p className="row project-description justify-content-center">{portfolio[state.displayingIndex].desc}</p>
                <h6 className="row tech justify-content-center">{displayTechList(portfolio[state.displayingIndex].tech)}</h6>
            </div>
              <button className="col-3 btn" onClick={() => handleBtnClick("next")}>
                <FaAngleDoubleRight
                  color="#f8f9fa"
                  size="50px"
                  style={{ margin: '0 5px' }} />
              </button>
          </div>
        </>
    })
  }

  return (<>
    <div class="container portfolio-list" id="content-center">
      {state.currentCard}
    </div>
  </>)
}

export default Projects