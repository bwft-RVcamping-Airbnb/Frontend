import React, { useState, useEffect} from 'react';
import Axios from 'axios';

const ListingList = props => {
  const [listings, setListings] = useState([])

  useEffect(() => {
    const getListings = () => {
      axios
        .get()
        .then(response => {
          setListings(response.data)
        });
        .catch(error => {
          console.log(error)
        });
    }
    getListings();
  }, []);

  return (
    <div>
     
    </div>
  )
}