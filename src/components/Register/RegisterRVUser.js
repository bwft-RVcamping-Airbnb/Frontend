import React from 'react'
import { useForm } from 'react-hook-form'

function RegisterRVUser() {
  const { register, handleSubmit, errors} = useForm()
  const onSubmit = (data) => {
    console.log(data);
  }
  
  return (
    <form className="App" onSubmit={handleSubmit(onSubmit)}>
      <h2>Land Owner Login</h2>
      <label>Name</label>
      <input name='username' ref={register({ required: true})} />

      {errors.username && errors.username.type === 'required' && (<p>This is required</p>
      )}

      <label>email</label>
      <input name='email' ref={register({ required: true})} />

      {errors.email && errors.email.type === 'required' && (<p>This is required</p>
      )}

      <input type='submit' />
    </form>
  )
}

export default RegisterRVUser;