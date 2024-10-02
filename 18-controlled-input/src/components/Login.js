import { useState } from "react";

function Login() {
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const [data, setData] = useState({ username: "", password: "" });

  function handleFormSubmit(event) {
    event.preventDefault();
    console.log(event.target);

    console.log(data);
    alert(JSON.stringify(data));
  }

  function handleInpitChange(event, name) {
    return setData({ ...data, [name]: event.target.value });
  }

  return (
    <>
      <h1>Login Form</h1>

      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={data.username}
            onChange={(e) => {
              handleInpitChange(e, "username");
            }}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={data.password}
            onChange={(e) => {
              // setPassword(e.target.value);
              setData({ ...data, password: e.target.value }); // вместо строчек выше - либо вынести в отдельную функцию (как сделано для username)
            }}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
