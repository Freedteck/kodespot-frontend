import "../styles/Card.css";
import rocket from "../assets/RocketLaunch.svg";

const Card = ({ img, title, desc, text }) => {
  return (
    <div className="card">
      <img src={img} alt={title} width={82} height={82} />
      <h3>{title}</h3>
      <p>{desc}</p>
      {text && (
        <a href="">
          {text} <img src={rocket} alt="go" />
        </a>
      )}
    </div>
  );
};

export default Card;
