import React, { useEffect, useRef, useState } from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  const [index, setIndex] = useState(0);
  const slidesRef = useRef([]);
  const dotsRef = useRef([]);

  const navigate = useNavigate();

  const handleButtonClick = (product) => {
    navigate(`/${product.toLowerCase()}`);
  };

const [index2, setIndex2] = useState(0);
const slidesRef2 = useRef([]);


useEffect(() => {
  const changeSlide2 = () => {
    const newIndex2 = (index2 + 1) % slidesRef2.current.length;

    for (let i = 0; i < slidesRef2.current.length; i++) {
      slidesRef2.current[i].style.display = i === newIndex2 ? 'block' : 'none';
    }

    setIndex2(newIndex2);
  };

  const sliderInterval2 = setInterval(changeSlide2, 2500);

  return () => {
    clearInterval(sliderInterval2);
  };
}, [index2]);

  useEffect(() => {
    const changeSlide = () => {
      const newIndex = (index + 1) % slidesRef.current.length;

      for (let i = 0; i < slidesRef.current.length; i++) {
        slidesRef.current[i].style.display = i === newIndex ? 'block' : 'none';
        dotsRef.current[i].classList.toggle('active', i === newIndex);
      }

      setIndex(newIndex);
    };

    const sliderInterval = setInterval(changeSlide, 2000);

    return () => {
      clearInterval(sliderInterval);
    };
  }, [index]);

  return (
    <div className='body'>
      <div className='container-fluid'>
        <div className='row '> 
          <div id="slider">  
            <div className="slides" ref={(el) => (slidesRef.current[0] = el)}>
              <img src="./slide4.jpeg" alt="Slide 2" width="100%" className='sidepic' />
            </div>

            <div className="slides" ref={(el) => (slidesRef.current[1] = el)}>
              <img src="./slide1.webp" alt="Slide 2" width="100%" className='sidepic' />
            </div>

            <div className="slides" ref={(el) => (slidesRef.current[2] = el)}>
              <img src="./image31.webp" alt="Slide 2" width="100%" className='sidepic' />
            </div>

            <div className="slides" ref={(el) => (slidesRef.current[3] = el)}>
              <img src="./slide2.webp" alt="Slide 3" width="100%" className='sidepic' />
            </div>

            <div className="slides" ref={(el) => (slidesRef.current[4] = el)}>
              <img src="./bg1.webp" alt="Slide 4" width="100%" className='sidepic' />
            </div>

            <div id="dot">
              <span className="dot" ref={(el) => (dotsRef.current[0] = el)}></span>
              <span className="dot" ref={(el) => (dotsRef.current[1] = el)}></span>
              <span className="dot" ref={(el) => (dotsRef.current[2] = el)}></span>
              <span className="dot" ref={(el) => (dotsRef.current[3] = el)}></span>
              <span className="dot" ref={(el) => (dotsRef.current[4] = el)}></span>
            </div>
          </div>
        </div>
      </div>

<div className='container-fluid'>
  <div className='row ms-5'>
    <div className='col-lg-12 ms-4 '>
      <img src='./move1.avif' className='aside'/>
    </div>
  </div>
</div>

<div className='container-fluid'>
  <div className='row ms-4'>
    <div className='col-lg-12 ms-5'>
      <img src='./move3.avif' className='aside' />
    </div>
  </div>
</div>




      <div className='container-fluid ms-2'> 
      <h2 className='col ms-5'>SHOP BY CATEGORY</h2>
        <div className='row tp ms-5 me-3'>
        
          <div className='col-lg-3'>
            <div className="product-box">
              <img src="./image1.png" alt="Product 1" className='up' onClick={() => handleButtonClick('Moisturizer')} />
              
              <button className='button1' onClick={() => handleButtonClick('Moisturizer')}>Moisturizer</button>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="product-box">
              <img src="./image2.avif" alt="Product 2" className='up'  onClick={() => handleButtonClick('sunscreen')}/>
              <button className='button1' onClick={() => handleButtonClick('sunscreen')}>Sunscreen</button>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="product-box">
              <img src="./image3.webp" alt="Product 3"className='up' onClick={() => handleButtonClick('Concealer')} />
              <button className='button1' onClick={() => handleButtonClick('Concealer')}>Concealer</button>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="product-box">
              <img src="./image4.webp" alt="Product 4" className='up' onClick={() => handleButtonClick('compactpowder')} />
              <button className='button1' onClick={() => handleButtonClick('compactpowder')}>Compact Powder</button>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="product-box">
              <img src="./image5.webp" alt="Product 5" className='up'  onClick={() => handleButtonClick('Foundation')} />
              <button className='button1' onClick={() => handleButtonClick('Foundation')}>Foundation</button>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="product-box">
              <img src="./image6.webp" alt="Product 6" className='up' onClick={() => handleButtonClick('Primer')}/>
              <button className='button1' onClick={() => handleButtonClick('Primer')}>Primer</button>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="product-box">
              <img src="./image7.webp" alt="Product 7" className='up' onClick={() => handleButtonClick('NailPolish')}/>
              <button className='button1' onClick={() => handleButtonClick('NailPolish')}>Nail Polish</button>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className="product-box">
              <img src="./image8.webp" alt="Product 8"className='up' onClick={() => handleButtonClick('eyeliner')}/>
              <button className='button1' onClick={() => handleButtonClick('eyeliner')}>Eyeliner</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className='container-fluid'>
      <div className='row'>
 <div className='col-lg-4 '>
    <img src='./move4.avif'  className='up'/>
 </div>
 <div className='col-lg-4 custom-margin'>
    <img src='./move5.avif' className='up'/>
 </div>
 <div className='col-lg-2 custom-margin'>
    <img src='./move6.avif' className='up'/>
 </div>
</div>
</div>


      <div className='container-fluid'>
  <div className='row ms-3'>
    <div className='col-lg-12 ms-5'>
      <img src='./move2.avif'/>
    </div>
  </div>
</div>

<div className='container-fluid'>
  <div className='row'> 
    <div id="slider2">  
      <div className="slides1" ref={(el) => (slidesRef2.current[0] = el)}>
        <img src="./slide5.jpg" alt="Slide 2" width="100%" className='sidepic' />
      </div>

      <div className="slides1" ref={(el) => (slidesRef2.current[1] = el)}>
        <img src="./slide6.jpg" alt="Slide 2" width="100%" className='sidepic' />
      </div>

      <div className="slides1" ref={(el) => (slidesRef2.current[2] = el)}>
        <img src="./slide7.gif" alt="Slide 2" width="100%" className='sidepic' />
      </div>
    </div>
  </div>
</div>

      <footer id="footer">
        <div className="leftFooter">
          <h3>DOWNLOAD OUR APP</h3>
          <p>Download App for Android and iOS Mobile Phone</p>
          <img src="./playstore.png" alt="playstore" />
          <img src="./Appstore.png" alt="Appstore" />
        </div>
        <div className="midFooter">
        <img src="./logo6.png" alt="Logo" className='logoc' />
          <p>Our Purpose Is To Sustainably Make the Pleasure and Benefits Of Clothes Accessible to the Many</p>
          <p>Copyrights 2023 &copy; | WayFair</p>
        </div>
        <div className="rightFooter">
          <h4>Follow US</h4>
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">YouTube</a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
