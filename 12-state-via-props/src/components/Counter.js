function Counter(props) {
  console.log("Counter rendering");

  const { count } = props;
  return <h1>Total clicks: {count}</h1>;
}

export default Counter;
