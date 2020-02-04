import React, { useState, useEffect} from 'react';
import axios from 'axios';

import results from '../../api/data';

const ListingsList = props => {

  const [listings, setListings] = useState([])

  useEffect(() => {
      axios.get(results)
        .then(response => {
          console.log(response);
          // setListings(response.data)
        })
        .catch(error => {
          console.log(error)
        });
  }, []);

  return (
    <div>
     
    </div>
  )
}

export default ListingsList;
