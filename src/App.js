import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <span>ANY LOGO</span>
          </div>
          <GiHamburgerMenu className="burger-menu"/>
          <div className="header-navigation">
            <nav className="navigation">
              <ul className="ul-nav">
                <li>მთავარი</li>
                <li>ჩვენ შესახებ</li>
                <li>სიახლეები</li>
                <li>კონტაქტი</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
