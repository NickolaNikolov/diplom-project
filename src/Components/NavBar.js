import React from 'react';
import avatar from '../img/avatar.jpeg';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="NavBar">
            
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt=""/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <NavLink to="/" exact activeClassName="active">
                            Начало
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" exact activeClassName="active">
                            Информация
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/solution" exact activeClassName="active">
                            Решението
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" exact activeClassName="active">
                            Контакти
                        </NavLink>
                    </li>
                </ul>
                    <footer className="footer">
                        <p>
                            @2021 Tu-Sofia
                        </p>
                    </footer>
            </nav>
        </div>
    );
}

export default NavBar;
