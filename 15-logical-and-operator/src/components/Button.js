function Button(props) {
  console.log("Button rendering");

  const { onClick } = props;
  return <button onClick={onClick}>Click me</button>;
}

export default Button;
