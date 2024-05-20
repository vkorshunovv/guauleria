import "./Header.css";
import userLogin from "../src/assets/userLogin.png";
import clock from "../src/assets/clock.png";
import location from "../src/assets/Location.png";

export default function Header() {
  return (
    <div className="header">
      <section className="upperHeader">
        <div className="headerContainer">
          <div className="headerLinks">
            <menu className="menu">
              <li>
                <a href="/">Our Standarts</a>
              </li>
              <li>
                <a href="/">Find A Specialist</a>
              </li>
              <li>
                <a href="/">Contact Us</a>
              </li>
            </menu>
          </div>
          <div className="logoMain">
            <p>guaulería</p>
          </div>
          <div className="lastHeaderCol">
            <button className="userLogOut" type="button">
              Log out
            </button>
            <a href="/">
              <img src={userLogin} alt="User Avatar"/>
            </a>
          </div>
        </div>
      </section>
      <section className="bottomHeader">
        <div className="headerContainer">
          <div className="headerLinks">
            <menu className="menu">
              <li>
                <a href="/">Pets</a>
              </li>
              <li>
                <a href="/">Shop</a>
              </li>
              <li>
                <a href="/">Services</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
            </menu>
          </div>
          <div className="lastHeaderCol">
            <div className="clock">
              <div className="clockImg">
                <img src={clock} alt="Clock"/>
                <p>24/7</p>
              </div>
            </div>
            <div className="location">
              <div className="locationImg">
                <img src={location} alt="Location"/>
                <p>Madrid</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
