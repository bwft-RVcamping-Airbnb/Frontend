import React from 'react'
import { useForm } from 'react-hook-form'
import Loader from 'react-loader-spinner';
import { connect } from 'react-redux';


const EditListing = props => {

  const { register, handleSubmit, errors} = useForm();

  const onSubmit = (data) => {
    const body ={
      location: data.location,
      description: data.description,
      price_per_day: data.price,
      photo: data.photo_url || ''
    }

    
    console.log(data);
  }
  
  return (
    <div className="sign-up-form-container">
      {props.isLoading &&
        <Loader type="Rings" color="red" />
      }

      {!props.isLoading && 
        <>
          <h2>Add Listing</h2>
            <div className="form-container">

            <form className="App" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Title: </label>
              <input type="text" name='title' ref={register({title: 'title'},{required: true})}/>
              {errors.title && errors.title.type === 'required' && (<p>This is required</p>)}
            </div>
            <div>
              <label>Description: </label>
              <textarea rows="2" cols="30" name='description' ref={register({description: 'description'},{required: true})}/>
              {errors.description && <p>This is required</p>}
            </div>
            <div>
            <label>Log Size</label>
              <select name='size' ref={register({size: 'size'},{ required: true})} >
                <option value="">Select...</option>
                <option value="small">Small 8ft to 16ft</option>
                <option value="medium">Medium 17ft to 25ft</option>
                <option value="large">Large 26ft to 35ft</option>
                <option value="xlarge">XLarge 36ft to 43ft</option>
              </select>
              {errors.size && <p>This is required</p>}
            </div>
            <div>
              <label>Price</label>
              <input type="number" name='price' ref={register({price: 'price'},{required: true})} />
              {errors.price && <p>This is required</p>}
            </div>
            <div>
              <label>Photo: </label>
              <input type='url' name='photo_url' ref={register({photo_url: 'photo_url' })} />
              {errors.photo_url && errors.photo_url.type === 'required' && (<p>This is required</p>)}
            </div>
            <div>
              <label>Location</label>
              <input type="text" name='location' ref={register({location: 'location'},{ required: true})} />
              {errors.location && errors.location.type === 'required' && (<p>This is required</p>)}
            </div>
            <div>
            <label>State</label>
              <select name='state' ref={register({state: 'state'},{ required: true})} >
                <option value="">Select...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              {errors.state && <p>This is required</p>}
            </div>
            
            
              <input type='submit' />
            </form>

          </div>
        </>
      }
    </div>
    
  )
}

const mapStateToProps = state => ({
    isLoading: state.addListing.isLoading
});

export default connect(mapStateToProps, {})(EditListing);