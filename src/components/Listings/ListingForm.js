import React, { useState } from 'react';

const ListingForm = () => {
  const [listing, setListing] = useState ({
   location: "", 
   description: "",
   price: "",
   photo 
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
     <label htmlFor='location'>Location</label>
       <input 
         id='location'
         type='text'
         placeholder='UserName'
         onChange = {handleChange}
         name='location'
         value={listing.address}
       /> 
     <label htmlFor='description'>Description</label>
       <input 
         id='description'
         type='text'
         placeholder='Description'
         onChange = {handleChange}
         name='description'
         value={listing.description}
       />
       <label htmlFor='currency-field'>Price</label>
       <input 
         id='price'
         type='number'
         placeholder='Description'
         onChange = {handleChange}
         name='description'
         value={listing.description}
       />
     <button>Signup</button>
   </form>
 )
}

export default ListingForm;