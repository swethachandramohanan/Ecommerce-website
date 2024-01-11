import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const userId = userData._id;
const ProfilePage = () => {
  const [userProducts, setUserProducts] = useState([]);

  useEffect(() => {
    fetchData();
    fetchUserProducts();
  }, []);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token is missing in localStorage');
        return;
      }

      const userDataResponse = await fetch('http://localhost:3000/api/get-private-data', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (!userDataResponse.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await userDataResponse.json();
      setUserData(userData);



    }



  const fetchUserProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.get(`http://localhost:3000/api/get-user-products/${userId}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user products');
      }

      const products = response.data;
      setUserProducts(products);
    } catch (error) {
      console.error('Error fetching user products:', error);
    }
  };

  return (
    <div>
      <h2>Your Products</h2>
      <ul>
        {userProducts.map((product) => (
          <li key={product._id}>
            <div>
              <img src={`/product/${product.image}`} alt={product.title} />
            </div>
            <div>
              <p>{product.title}</p>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Quantity: {product.quantity}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
  export default ProfilePage;