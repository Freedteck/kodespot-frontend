import logo from "../assets/logo.png";
import Button from "./Button";
import menu from "../assets/menu.svg";

const Navbar = ({ icon }) => {
  return (
    <nav>
      <div id="logo">
        <img src={logo} alt="kodespot logo" />
      </div>
      <div className="menu">
        <img src={menu} alt="menu" width={48} />
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="">All Tracks</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Community</a>
          </li>
          <li>
            <a href="">Support</a>
          </li>
          <li>
            <a href="">Sign in</a>
          </li>
        </ul>
        <Button text="Get Started" icon={icon} />
      </div>
    </nav>
  );
};

export default Navbar;
