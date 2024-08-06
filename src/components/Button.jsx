export default function Button(props) {
  return (
    <button
      className={`button-wrapper ${isNaN(props.children) ? "operator" : ""} ${
        props.label || ""
      }`}
      onClick={() => props.handleClick(props.children)}
    >
      {props.children}
    </button>
  );
}
