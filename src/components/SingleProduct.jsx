import React from 'react'
import { useLocation, useParams } from 'react-router-dom'

const SingleProduct = () => {
    const params = useParams();
    const location = useLocation();
    console.log(location, "location");
    console.log(params, "params");

  return (
    <div>
      This is a Single Product page
      <div><p>{location.state.title}</p></div>
    </div>
  )
}

export default SingleProduct