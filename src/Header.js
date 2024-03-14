import "./Header.css";
import userLogin from "../src/assets/userLogin.png"

export default function Header() {
  return (
    <div className="header">
      <section className="upperHeader">
        <div className="headerContainer">
          <div className="headerLinks">
            <menu className="menu">
              <li>
                <a href="#">Our Standarts</a>
              </li>
              <li>
                <a href="#">Find A Specialist</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </menu>
          </div>
          <div className="logoMain">
            <p>guaulería</p>
          </div>
          <div className="lastHeaderCol">
            <button className="userLogOut" type="button">Log out</button>
            <a href="#"><img src={userLogin}/></a>
          </div>
        </div>
      </section>
      <section className="bottomHeader">
        <div className="headerContainer">
          <div className="headerLinks">
            <menu className="menu">
              <li>
                <a href="#">Pets</a>
              </li>
              <li>
                <a href="#">Shop</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </menu>
          </div>
          <div className="lastHeaderCol"></div>
        </div>
      </section>
    </div>
  );
}
