import React, { useEffect, useState } from 'react';
import './cart.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCartItems(existingCartItems);
    setTotalItems(existingCartItems.length);
  };

  const handleBuyClick = () => {
    toast.success('Thanks for shopping!', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: {
        color: 'black',
        borderRadius: '8px',
      },
    });
    const buyitems = JSON.parse(localStorage.getItem('buyitems')) || [];
    buyitems.push(...cartItems);
    localStorage.setItem('buyitems', JSON.stringify(buyitems));
    console.log('Buy clicked');
  };

  const handleRemoveLastClick = () => {
    const existingCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    if (existingCartItems.length > 0) {
      const updatedCartItems = existingCartItems.slice(0, -1);
      setCartItems(updatedCartItems);
      localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
      setTotalItems(updatedCartItems.length);
    }
  };

  const calculateTotalAmount = () => {
    const totalPrice = cartItems.reduce((total, item) => total + parseFloat(item.price), 0);
    const gst = 0.05 * totalPrice;
    const totalAmount = totalPrice + gst;
    if (Number.isFinite(totalAmount)) {
      return totalAmount;
    } else {
      return '0.00';
    }
  };

  return (
    <div className="container-fluid ">
      
      {cartItems.length === 0 ? (
        <div className="col-lg-12 text-center mb-5">
          <h3 className='empty mb-5'>Oops! Your bag is empty!</h3>
      <div className="empty-cart mb-5 mt-5">
       
         <span class="material-symbols-outlined hand">
line_start</span> <img src="./empty.png" alt="Empty cart" /><i class="bi bi-circle-fill eyes"></i><i class="bi bi-circle-fill eyes1"></i>
        <span class="material-symbols-outlined mouth">
horizontal_rule</span>
   <span class="material-symbols-outlined hand">line_end</span>
</div>
        </div>
      ) : (
        <div className="row section1">
          <div>
            <div className='bag'><h2>My Bag ({totalItems})</h2></div>
                <h5 className='black'>Congrats!You're eligible for free gift Please select.</h5>
              </div>
             
          {cartItems.map((item) => (
            <div key={item.id} className="product white col-lg-6">
             
              <div className="product-details">
                <img
                  src={`/files/${item.image[0].filename}`}
                  alt="productimage"
                  className="product-image"
                />
                <div className="description-wrapper">
                  <h2 className="head">{item.title}</h2>
                  <p className="description">{item.description}</p>
                </div>
                <h3 className="price">${item.price}</h3>
                <div className="buttons">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveLastClick(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              
            </div>
          
          ))}  
         
          <div className='under'> 
            <h6 className=''>GST: 5%</h6>
        <p className=''>Total Amount: ${calculateTotalAmount()}</p>
        <button className="under1" onClick={handleBuyClick}>  Buy </button>
        </div>
        </div>
         
      )}
      
    </div>
  );
};

export default Cart;
