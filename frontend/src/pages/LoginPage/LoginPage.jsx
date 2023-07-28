import { useState } from "react";

export default function Login(props) {
  const [inputUser, setInputUser] = useState("");

  const handleChange = (evt) => {
    setInputUser(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.setUser(inputUser);
  };

  return (
    <>
      <h1> What is your name? </h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input type="text" onChange={handleChange} />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
}