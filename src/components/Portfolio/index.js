import React from 'react';
import makingpeace from '../../assets/images/mpandb copy.png';
import cocktailbuddy from '../../assets/images/cocktailbuddy copy.png';
import notetaker from '../../assets/images/notetaker copy.png';
import madetomake from '../../assets/images/madetomake copy.png';

import 'bootstrap/dist/css/bootstrap.min.css';


const Portfolio = () => {
    return (
        <section id="portfolio" >
            <div className="projects">
                <h2 className="header text-info">My Portfolio</h2>
            </div>
            <div className="card text-info row justify-content-center">
                <div className="col-4">
                    <img src={makingpeace} alt="Making Peace Screenshot" style={{ height: "30%", width: "30%"}} />
            
                    <div className="card-body text-info">
                        <p className="name">Making Peace and Beyond</p>
                        <p className="icons">
                        <a href="http://www.makingpeaceandbeyond.com">Live Site</a>
                        </p>

                        <p className="description">
                        Front End Design</p>

                    </div>
                </div>
            
        
        
            <div className="col-4">
            <img src={cocktailbuddy} alt="Cocktail Buddy Screenshot" style={{height: "30%", width: "30%"}} />
            
            <div className="card-body text-info">
                <p className="name">Cocktail Buddy</p>
                <p className="icons">
                <a href="https://github.com/nbross/food-drink-api-project.git">GitHub Repo</a>
                <br></br>
                <a href="https://nbross.github.io/food-drink-api-project">Live Site</a>
                </p>

                <p className="description">
                HTML, CSS, JavaScript, JQuery
                </p>
            </div>
            </div>
        </div>
        <div className="card text-info row justify-content-center">
            <div className="col-4">
            <img src={notetaker} alt="NoteTaker Screenshot" style={{height: "30%", width: "30%"}} />
            
            <div className="card-body text-info">
                <p className="name">Note Taker</p>
                <p className="icons">
                <a href="https://github.com/tljurecki/note-taker.git">GitHub Repo</a>
                <br></br>
                <a href="https://shrouded-stream-36144.herokuapp.com/">Live Site</a>
                </p>

                <p className="description">
                Node.js, Express.js, JavaScript, UUID
                </p>
            </div>
            </div>
        
        
            <div className="col-4">
            <img src={madetomake} alt="Made to Make Screenshot" style={{height: "30%", width:"30%"}} />
            
            <div className="card-body text-info">
                <p className="name">Made to Make</p>
                <p className="icons">
                <a href="https://github.com/nbross/Project-2-Full-Stack-App">GitHub Repo</a>
                <br></br>
                <a href="https://hidden-mesa-12283.herokuapp.com/">Live Site</a>
                </p>

                <p className="description">
                Handlebars, Javascript, Node.js, Express.js, SQL, Sequelize
                </p>
            </div>
            </div>
        </div>

            
        </section>
    )
};

export default Portfolio;