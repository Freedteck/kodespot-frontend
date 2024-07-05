import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = ({ icon }) => {
  return (
    <nav>
      <div id="logo">
        <img src={logo} alt="kodespot logo" />
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
