import React from 'react';
import {faFacebook} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faSkype} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span>Nikola Nikolov</span>
                </h1>
                <p className="home-p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Corporis praesentium, cupiditate eum assumenda facere 
                    cum excepturi aliquam molestias qui eaque eius ipsa ut 
                    mollitia minus sint non autem quo labore!
                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faSkype} className="icon"/>
                    </Link>
                </div>
            </header>
        </div>
    );
}

export default HomePage;
