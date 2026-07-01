import "./Button.css";

function Button({ text, variant = "primary", onClick }) {
  return (
    <button
      className={`custom-btn ${variant}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;