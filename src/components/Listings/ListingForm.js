import React, { useState } from 'react';

const ListingForm = () => {
  const [listing, setListing] = useState ({
   username: "", 
   password: "" 
  });

  const handleChange = e => {
    setListing({ 
     ...listing, 
     [e.target.name]: e.target.value 
   });
 };

 const submitForm = e => {
   e.preventDefault();
    
 };
 return (
   <form onSubmit={submitForm}>
     <h2>Land Listing</h2>
     <label htmlFor='address'>Name</label>
       <input 
         id='name'
         type='text'
         placeholder='UserName'
         onChange = {handleChange}
         name='name'
         value={listing.address}
       /> 
     <label htmlFor='email'>Email</label>
       <input 
         id='password'
         type='password'
         placeholder='Password'
         onChange = {handleChange}
         name='email'
         value={listing.email}
       />
     <button>Signup</button>
   </form>
 )
}

export default ListingForm;