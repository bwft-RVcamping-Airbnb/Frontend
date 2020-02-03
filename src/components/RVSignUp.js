 import React, { useState } from 'react';

 const RVSignUp = () => {
   const [signup, setSignUp] = useState ({
    username: "", 
    password: "" 
   });

   const handleChange = e => {
    setSignUp({ 
      ...signup, 
      [e.target.name]: e.target.value 
    });
  };

  const submitForm = e => {
    e.preventDefault();
     
  };
  return (
    <form onSubmit={submitForm}>
      <h2>RV Owner Signup</h2>
      <label htmlFor='name'>Name</label>
        <input 
          id='name'
          type='text'
          placeholder='UserName'
          onChange = {handleChange}
          name='name'
          value={signup.name}
        /> 
      <label htmlFor='email'>Email</label>
        <input 
          id='password'
          type='password'
          placeholder='Password'
          onChange = {handleChange}
          name='email'
          value={signup.email}
        />
      <button>Signup</button>
    </form>
  )
 }

 export default RVSignUp;