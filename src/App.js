import './App.scss';
import NavBar from './Components/NavBar';
import HomePage from './Pages/HomePage';
import {Switch, Route} from 'react-router-dom';
import AboutPage from './Pages/AboutPage';
import SolutionPage from './Pages/SolutionPage';
import ContactPage from './Pages/ContactPage';
import {useState} from 'react';

function App() {
  const [navToggle, setNavToggle] = useState(false);

  const navClick = () => {
      setNavToggle(!navToggle)
  }
  return (
    <div className="App">
        <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
            <NavBar />
        </div>
        <div class="nav-btn" onClick={navClick}>
            <div class="line-1"></div>
            <div class="line-2"></div>
            <div class="line-3"></div>
        </div>
        <div className="main-content">
            <div className="content">
                <Switch>
                  <Route path="/" exact>
                    <HomePage />
                  </Route>
                  <Route path="/about" exact>
                    <AboutPage />
                  </Route>
                  <Route path="/solution" exact>
                    <SolutionPage />
                  </Route>
                  <Route path="/contact" exact>
                    <ContactPage />
                  </Route>
                </Switch>
            </div>
        </div>
    </div>
  );
}

export default App;
