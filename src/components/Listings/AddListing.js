import React, { useState } from 'react';

const AddListing= () => {
  const [listing, setListing] = useState ({
   title: "",
   location: "", 
   description: "",
   price: ""
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
     <label htmlFor='title'>Title</label>
       <input 
         id='title'
         type='text'
         placeholder='Title'
         onChange = {handleChange}
         name='title'
         value={listing.title}
       /> 
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
         placeholder='Price'
         onChange = {handleChange}
         name='price'
         value={listing.price}
       />
          
     <button>List</button>
   </form>
 )
}

export default AddListing;