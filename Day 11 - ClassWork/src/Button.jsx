const Button = ({ name, twclass, onClick }) => {
  return (
    <button className={`btn ${twclass}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
