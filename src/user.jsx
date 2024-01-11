import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

import './user.css';

const User = () => {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isSeller, setIsSeller] = useState(false);
  const [profile, setProfile] = useState(null);

  const handleIsSellerChange = (e) => {
    setIsSeller(e.target.checked);
  };

  const user = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('phoneNumber', phoneNumber);
      formData.append('password', password);
      formData.append('email', email);
      formData.append('isSeller', isSeller.toString());
      formData.append('profile', profile);

      const response = await axios.post('http://localhost:3000/api/user', formData);
      
      if (response.status === 200) {

         toast.success('User registered successfully!',{
          position: "top-center", 
         });


      setTimeout(() => {
        setName('');
        setPhoneNumber('');
        setPassword('');
        setEmail('');
        setIsSeller(false);
        setProfile(null);

        if (isSeller) {
          navigate('/seller');
        } else {
          navigate('/');
        }
      }, 500);
      } 
      else {
        const data = response.data;
        toast.error(`Error: ${data.error}`,{
          position: "top-center", 
        });
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('An error occurred while registering the user.',{
        position: "top-center", 
      });
    }
  };

  return (
    
    <div className='container-fluid background ms-5 '>
      <div className='row'>

      <div className='col-lg-6 '>
<img src='./img.webp' className=' imag'/>
      </div>
        <div className='col-lg-6'>
     
      <form onSubmit={user} className='form2'> 
      <h2 className='h2'>Register Here</h2>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>
          Are you a seller?
          <input
            type="checkbox"
            checked={isSeller}
            onChange={handleIsSellerChange}
          />
        </label>

        <label htmlFor="profileImage">Profile Image</label>
        <input
          type="file"
          id="profile"
          name="profile"
          onChange={(e) => setProfile(e.target.files[0])}
        />

        <input type="submit" value="Register" className='reg' />
      </form>
     </div>
      </div>


    </div>
  );
};

export default User;
