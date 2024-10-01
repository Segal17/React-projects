function Button(props) {
  console.log("Button rendering");

  const { onClick, text } = props;
  return <button onClick={onClick}> {text} </button>;
}

export default Button;
