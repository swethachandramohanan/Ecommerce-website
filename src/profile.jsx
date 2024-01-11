import React, { useEffect, useState } from 'react';
import './profile.css'; // Import your existing CSS file
import { useNavigate } from 'react-router-dom';
// ...

const Profile = () => {
  const [userData, setUserData] = useState({});
  const [newsData, setNewsData] = useState([]);
  const [buyitems, setBuyItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const fetchData = async () => {
    try {
      const token = localStorage.getItem('token');

      if (!token) {
        console.error('Token is missing in localStorage');
        return;
      }
      const buyitems = JSON.parse(localStorage.getItem('buyitems')) || [];
      setBuyItems(buyitems);

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

      const newsDataResponse = await fetch('http://localhost:3000/api/get-news-data', {
        method: 'GET',
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      if (!newsDataResponse.ok) {
        throw new Error('Failed to fetch news data');
      }

      const newsData = await newsDataResponse.json();
      setNewsData(newsData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
     
      <div className='container-fluid '>
      <div className='row'>
        <h2 className='mt-5' >My Orders</h2>
          <div className='col-lg-8 left'>
          <div className="row ">
        {buyitems.map((item) => (
          <div key={item.id} className=" col-lg-3">
            <div className="product">
              <img
                src={`/files/${item.image[0].filename}`}
                alt="productimage"
                className="product-image"
              />
              <div className="description-wrapper">
                <h2 className="head">{item.title}</h2>
                <p className="description">{item.description}</p>
              </div>

            </div>
          </div>
        ))}
      </div>
          
          </div>
        </div>

      <div className='row'>
        <div className='col-lg-3'>
          <menu id="user" className="dynamicMenu">
            <div className="user-profile">
              <div className="profile-pic">
                {userData.profile && userData.profile.length > 0 && (
                  <img
                    src={`/profile/${userData.profile[0].filename}`}
                    alt="Profile"
                    className="profile-image"
                  />
                )}
              </div>
  
              <div className="user-info">
                <div className="username">
                  <p>
                    <strong>{userData.name}</strong>
                  </p>
                </div>
              </div>
  
              <div className='order'>
                {userData.isSeller && (
                  <div className='menu-item' onClick={() => navigate('/seller')}>
                    <h4>To Seller page</h4>
                    <span className="material-symbols-outlined arrow">chevron_right</span>
                  </div>
                )}
                <hr/>
                <div className='menu-item'>
                  <h4>My orders</h4>
                  <span className="material-symbols-outlined arrow">chevron_right</span>
                </div>
                <hr/>
              </div>
              <button onClick={handleLogout} className='buttonlog log'>Logout</button>
            </div>
          </menu>
        </div>
      </div>
      
  <div className='row move1'>
    <div className='col-lg-4 one'>
      <img src='./wallet1.png' className='image'></img>
<h3 className='h1'>100% Secure Payment</h3>
    </div>
    <div className='col-lg-4 one'>
      <img src='./assist.png' className='image2'/>
      <h3 className='h1'>Beauty Assistant</h3>
      </div>
      <div className='col-lg-4 one'>
      <img src='./help.png' className='image3'/>
      <h3 className='h1'>Help Center</h3>
      </div>
  </div> 
 
      <div className='row move'>
        <div className='col-lg'>
          <div className='move'>
            <h6>FAQs</h6>
            <p><strong>What happens when I update my email address (or mobile number)?</strong></p>
            <p>Your login email id (or mobile number) changes, likewise. You'll receive all your account-related communication on your updated email address (or mobile number).</p>
            <p><strong>When will my account be updated with the new email address (or mobile number)?</strong></p>
            <p>It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.</p>
            <p><strong>What happens to my existing account when I update my email address (or mobile number)?</strong></p>
            <p>Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information, and personal details.</p>
            <img src='bottom.png' alt='Bottom Image'/>
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
                }
export default Profile;
