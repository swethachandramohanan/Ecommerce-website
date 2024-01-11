import React, { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [name, setname] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
         name,
          password,
        }),
      });
  
      if (response.ok) {
        toast.success('User registered successfully!');
        const data = await response.json();
        setTimeout(() => {
        localStorage.setItem('token', data.token);
        console.log('Token set:', data.token);
        window.location.href = '/profile';
        },1000);
      } else {
        const data = await response.json();
        toast.error(`Error: ${data.error}`);
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred while registering the user.');
    };
  };
  

  return (
    <div className='bodylogin'>
      <div className='container-fluid ms-5 bgbody' >
      <div className='row'>
        <div className='col-lg-5'>
          <img src='./login.avif' className='red'  />
        </div>
     
    <div className='col-lg-6'><form onSubmit={handleLogin} className='form1'>  <h2>Login</h2>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required
        /> 
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" value="Login" className='jump' />
      </form> 
      </div> 
  
      </div>
   <Link to="/" className='link1'>BACK</Link>
    </div>
    </div>
    
  );
};

export default Login;
