const Button = ({ text, icon }) => {
  return (
    <button className={icon ? "" : "btn"}>
      {icon && <img src={icon} alt="go" />}
      {text}
    </button>
  );
};

export default Button;
