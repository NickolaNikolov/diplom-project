import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Nikola Nikolov</span>
                </h1>
                <p className="home-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corporis praesentium, cupiditate eum assumenda facere 
                    cum excepturi aliquam molestias qui eaque eius ipsa ut 
                    mollitia minus sint non autem quo labore!
                </p>
                <div className="icons">
                    <a href="https://www.facebook.com/profile.php?id=100003788482343" target="_blank" rel="noopener noreferrer" className="fb-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb"/>
                    </a>
                    <a href="https://github.com/NickolaNikolov" target="_blank" rel="noopener noreferrer" className="gt-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </a>
                    <a href="https://www.linkedin.com/in/nikola-nikolov-6b6a001a6/" target="_blank" rel="noopener noreferrer" className="ld-holder">
                        <FontAwesomeIcon icon={faLinkedin} className="icon ld"/>
                    </a>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
