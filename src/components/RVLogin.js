import React, { useState } from "react";

const RVLogin = () => {
  const [login, setLogin] = useState({ 
    username: "", 
    password: "" 
  });

  const handleChange = e => {
    setLogin({ 
      ...login, 
      [e.target.name]: e.target.value 
    });
  };

  const submitForm = e => {
    e.preventDefault();
     
  };
 
  return (
    <form onSubmit={submitForm}>
      <h2>RV Owner Login</h2>
      <label htmlFor='name'>Name</label>
        <input 
          id='name'
          type='text'
          placeholder='UserName'
          onChange = {handleChange}
          name='name'
          value={login.name}
        /> 
      <label htmlFor='email'>Email</label>
        <input 
          id='password'
          type='password'
          placeholder='Password'
          onChange = {handleChange}
          name='email'
          value={login.email}
        />
      <button>Login</button>
    </form>
  )
}

export default RVLogin;
