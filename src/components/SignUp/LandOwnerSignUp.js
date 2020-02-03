import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const LandOwnerSignUp = () => {
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
     <h2>Land Owner Signup</h2>
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
     <Button variant="contained" color="secondary">Signup</Button>
   </form>
 )
}

export default LandOwnerSignUp;