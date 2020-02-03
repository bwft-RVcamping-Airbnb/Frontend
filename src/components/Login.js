import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({ 
    username: "", 
    password: "" 
  });

  const handleChange = e => {
    setUser({ 
      ...user, 
      [e.target.name]: e.target.value 
    });
  };

  const submitForm = e => {
    e.preventDefault();
     
  };
 
  return (
    <form onSubmit={submitForm}>
      <h2>Login</h2>
      <label htmlFor='name'>Name</label>
        <input 
          id='name'
          type='text'
          placeholder='UserName'
          onChange = {handleChange}
          name='name'
          value={user.name}
        /> 
      <label htmlFor='email'>Email</label>
        <input 
          id='password'
          type='password'
          placeholder='Password'
          onChange = {handleChange}
          name='email'
          value={user.email}
        />
      <button>Login</button>
    </form>
  )
}

export default Login;
