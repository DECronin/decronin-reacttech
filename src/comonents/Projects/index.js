import React, { useEffect, useState } from 'react';
import './index.css';
import {FaAngleDoubleRight, FaAngleDoubleLeft} from "react-icons/fa";

const portfolio = [{
  title: "Empty Kitchen",
  imgSrc: "./files/food.jpg",
  imgAlt: "Rutgers Info Widget",
  url: "https://decronin.github.io/project-one-ddb/"
}, {
  title: "Cypher-Text",
  imgSrc: "./files/firewall-994x400.jpg",
  igAlt: "cypher-text",
  url: "https://cypher-text.herokuapp.com/"
}, {
  title: "Employee Directory",
  imgSrc: "./files/emp-dir-ss.jpg",
  imgAlt: "Employee Directory Template",
  url: "https://decronin-employeedirectory.herokuapp.com/"
}, {
  title: "MongNews",
  imgSrc: "./files/newspaper-1.jpg",
  imgAlt: "Mongo Scraper",
  url: "http://mongnews.herokuapp.com/"
}, {
  title: "Gif Searcher",
  imgSrc: "./files/searching.jpg",
  imgAlt: "Giphy",
  url: "https://decronin.github.io/Gif-Searcher/"
}, {
  title: "Train Calculator",
  imgSrc: "./files/technics-q-c-640-480-9.jpg",
  imgAlt: "Train Scheduler",
  url: "https://decronin.github.io/TrainScheduleCalculator/"
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


  function buildDisplayFocus(){
    console.log(`line 84?`)
    setThisState({
      ...state, currentCard:
        <>
          <div className="row">
            <button className="col-3 btn" onClick={() => handleBtnClick("back")}>
              <FaAngleDoubleLeft
                color="#008f68"
                size="50px"
                style={{ margin: '0 5px' }} />
            </button>
            <div className="col-6">

              <a href={portfolio[state.displayingIndex].url}>
                <img src={portfolio[state.displayingIndex].imgSrc} alt={portfolio[state.displayingIndex].imgAlt} className="work" />
                <h2>{portfolio[state.displayingIndex].title}</h2>
              </a>

            </div>
              <button className="col-3 btn" onClick={() => handleBtnClick("next")}>
                <FaAngleDoubleRight
                  color="#008f68"
                  size="50px"
                  style={{ margin: '0 5px' }} />
              </button>
          </div>
        </>
    })
  }

  return (<>
    <div class="container portfolio-list" id="content-center">
      <div class="row">
        <h2 id="portfolio-h2">Portfolio</h2>
      </div>
      {state.currentCard}
      {/* <div class="work"> <a href="https://github.com/DECronin/bamazon" target="_blank">
        <img src="./files/Amazon-Smile-Squ-f9a6e959-ed0d-466b-920a-e9a214e54c02._CB514185896_.jpg" alt="bamazon" />

        <h3>Bamazon</h3></a>
      </div> */}
    </div>
  </>)
}

export default Projects