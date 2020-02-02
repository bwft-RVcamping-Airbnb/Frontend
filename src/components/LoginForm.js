import React, { useState } from "react";


function LoginForm() {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            placeholder="User Name"
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            placeholder="Password"
            onChange={event => handleChange(event)}
          />
        </label>
        <button>Login!</button>
      </form>
    </div>
  );
}

export default LoginForm;
 