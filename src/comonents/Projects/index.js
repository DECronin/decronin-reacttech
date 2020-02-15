import React from 'react';
import './index.css';

function Projects(){

    return(<>
        <div class="container portfolio-list" id="content-center">
          <div class="row">
            <h2 id="portfolio-h2">Portfolio</h2>
          </div>
          <div class="work"> <a href="https://decronin.github.io/project-one-ddb/" target="_blank">
            <img src="./files/food.jpg" alt="Rutgers Info Widget" />
            <h3>Empty Kitchen</h3></a>
          </div>
          <div class="work"> <a href="https://cypher-text.herokuapp.com/" target="_blank">
            <img src="./files/firewall-994x400.jpg" alt="cypher-text" />
    
            <h3>Cypher-Text</h3></a>
          </div>
          <div class="work"><a href="https://decronin.github.io/Word-Guess-Game/" target="_blank">
            <img src="./files/1_3FTNbYQ3pWzJ1u4XF1Suzw.png" alt="Word Guess" />
    
            <h3>Word Guess</h3></a>
          </div>
          <div class="work"> <a href="https://github.com/DECronin/bamazon" target="_blank">
            <img src="./files/Amazon-Smile-Squ-f9a6e959-ed0d-466b-920a-e9a214e54c02._CB514185896_.jpg" alt="bamazon" />
    
            <h3>Bamazon</h3></a>
          </div>
          <div class="work"> <a href="https://decronin.github.io/Gif-Searcher/" target="_blank">
            <img src="./files/searching.jpg" />
            <h3>Gif Searcher</h3></a>
          </div>
          <div class="work"> <a href="https://decronin.github.io/TrainScheduleCalculator/" target="_blank">
            <img src="./files/technics-q-c-640-480-9.jpg" alt="Rock Paper Scissors" />
    
            <h3>Train Calculator</h3> </a>
          </div>
        </div>
    </>)

}

export default Projects