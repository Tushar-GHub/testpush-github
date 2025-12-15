import React, { useEffect, useState } from 'react'

const useProducts = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProductsData(data.products);
    })
  },[]);
  
  return [productsData, setProductsData]; 
}

export default useProducts