import React from 'react';
import './Seller.css';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
const Seller = () => {
  const navigate = useNavigate();

  const handleCategoryClick = (category) => {
    navigate(`/${category.toLowerCase()}`);
  };

  return (
    <div>
      <div className='container-fluid'>
        <div className='row mt-5'>
        <div className='col-lg-6 mt-5'>
        <h1 className='mt-5 font'>Become a WayFair Seller</h1>
      <h2 className='font'> and sell to 45+Crore customers</h2>

          </div>
          <div className='col-lg-6'>
            <img src='./seller.jpg'/>
          </div>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row '>
        <div className='col-lg'>
      <div className="seller-container">
      <div className="category-buttons">
        <button onClick={() => handleCategoryClick('Product1')} >Moisturizer</button>
        <button onClick={() => handleCategoryClick('Product2')}>Sunscreen</button>
        <button onClick={() => handleCategoryClick('Product3')}>Concealer</button>
        <button onClick={() => handleCategoryClick('Product4')}>Compact Powder</button>
        <button onClick={() => handleCategoryClick('Product5')}>Foundation</button>
        <button onClick={() => handleCategoryClick('Product6')}>Primer</button>
        <button onClick={() => handleCategoryClick('Product7')}>Nail Polish</button>
        <button onClick={() => handleCategoryClick('Product8')}>Eyeliner</button>

      </div>
</div>
</div>
</div>   
    </div>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
           <h2 className='side'><strong>Your Journey on WayFair</strong></h2>
        <h5>Starting your online business with Wayfairis easy. 14 lakh+ sellers trust Wayfair with their business</h5>
          </div>
          <div className='col-lg mt-5'>
         <img src='icon1.svg'/>
         <h5> <strong>Create</strong></h5>
         <p>Register in just 10 mins with valid GST, address, & bank details</p>
          </div>
          <div className='col-lg mt-5'>
         <img src='icon2.svg'/>
         <h5> <strong>List</strong></h5>
         <p>List your products (min 1 no.) that you want to sell on Wayfair.</p>
          </div>
          <div className='col-lg mt-5'>
         <img src='icon3.svg'/>
         <h5> <strong>Orders</strong></h5>
         <p>Receive orders from over 45 crore+ Wayfair customers.</p>
          </div>
          <div className='col-lg mt-5'>
         <img src='icon4.svg'/>
         <h5><strong>Shipment</strong></h5>
         <p>WayFair ensures stress free delivery of your products</p>
          </div>
          <div className='col-lg mt-5'>
         <img src='icon5.svg'/>
         <h5><strong>Payment</strong></h5>
         <p>Receive payment 7 days* from the date of dispatch of your order</p>
          </div>
        </div>
      </div>
    </div>
  
  );
};

export default Seller;
