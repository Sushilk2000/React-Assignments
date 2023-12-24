/**
 * Renders a button component with the specified name, tailwind class, and onClick event handler.
 *
 * @param {string} name - The text to display on the button.
 * @param {string} twclass - The tailwind class to apply to the button.
 * @param {function} onClick - The event handler function to be called when the button is clicked.
 * @return {ReactElement} The rendered button component.
 */
const Button = ({ name, twclass, onClick }) => {
  return (
    <button className={`btn ${twclass}`} onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
