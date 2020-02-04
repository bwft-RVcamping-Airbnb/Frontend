import React from 'react'
import { useForm } from 'react-hook-form'

function AddListing() {
  const { register, handleSubmit, errors} = useForm()
  const onSubmit = (data) => {
    console.log(data);
  }
  
  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h2>Add Listing</h2>
      <label>Title</label>
      <input name='title' ref={register({ required: true})} />

      {errors.title && errors.title.type === 'required' && (<p>This is required</p>
      )}

      <label>Location</label>
      <input name='location' ref={register({ required: true})} />

      {errors.location && errors.location.type === 'required' && (<p>This is required</p>
      )}

      <label>Price</label>
      <input name='price' ref={register({ required: true})} />
      {errors.price && <p>This is required</p>}

      <label>Description</label>
      <select name='description' ref={register({ required: true})} >
        <option value="">Select...</option>
        <option value="small">Small 8ft to 16ft</option>
        <option value="medium">Medium 17ft to 25ft</option>
        <option value="large">Large 26ft to 35ft</option>
        <option value="xlarge">XLarge 36ft to 43ft</option>
      </select>
      {errors.description && <p>This is required</p>}

      <input type='submit' />
    </form>
  )
}

export default AddListing;