export default function Button(props) {
  return (
    <button
      className={`button ${props.color} ${props.background} ${props.buttonClasses} hover`}
    >
      {props.text}
    </button>
  );
}
