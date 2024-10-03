function Wrapper(props) {
  const style = {
    backgroundColor: props.color,
    width: "250px",
    margin: "20px auto",
    padding: "20px",
  };
  console.log(props);
  return (
    <div style={style}>
      {/* <h1>Hello Wrapper</h1> */}
      {props.children}
    </div>
  );
}

export default Wrapper;
