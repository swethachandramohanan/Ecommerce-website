import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./view.css";
import { useNavigate } from 'react-router-dom';

const Moisturizer = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
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
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/moisturizer');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getPData = (id, product) => {
        console.log(`Product ID: ${id}, Title: ${product.title}`);
    };

    const addToCart = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        navigate('/cart');
    };
   
        const [filters, setFilters] = useState({
            brand: '',
            price: '',
            discount: '',
            preference: '',
            skinType: '',
            spf: '',
            formulation: '',
        });
    
        const handleChange = (event) => {
            const { name, value } = event.target;
            setFilters({ ...filters, [name]: value });
        };
    
    return (
        <> 
            <div className='container-fluid mt-5'>
                <div className='row'>
                    <div id="slider2">
                        <div className="slides" ref={(el) => (slidesRef2.current[0] = el)}>
                            <img src="./slideimg.avif" alt="Slide 1" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[1] = el)}>
                            <img src="./slideimg2.avif" alt="Slide 2" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[2] = el)}>
                            <img src="./slideimg3.avif" alt="Slide 3" width="100%" className='sidepic inc' />
                        </div>
                    </div>
                </div>

    
            <div className='row'>
            <div className='col-lg-3'>
                <div className='row'>
                    <div className='col-lg-6'>
                      
                    </div>
                   
                    <div className='col-lg-6'>
                    <h4>Filters</h4>
            <div>
               
                <select name='brand' value={filters.brand} onChange={handleChange} className='mar'>
                    <option value='' >Brand</option>
                    <option value='brand1'>minimalist</option>
                    <option value='brand2'>Dot&key</option>
                </select>
            </div>
            <div>
            
                <select name='price' value={filters.price} onChange={handleChange} className='mar'>
                    <option value=''>price</option>
                    <option value='low'>Low to high</option>
                    <option value='high'>High to low</option>
                </select>
            </div>
            <div>
              
                <select name='discount' value={filters.discount} onChange={handleChange} className='mar'>
                    <option value=''>Discount</option>
                    <option value='5'>5%</option>
                    <option value='10'>10%</option>
                </select>
            </div>
            <div>
               
                <select name='preference' value={filters.preference} onChange={handleChange} className='mar'>
                    <option value=''>Preference</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>
            <div>
                
                <select name='skinType' value={filters.skinType} onChange={handleChange}className='mar'>
                    <option value=''>Skin Type</option>
                    <option value='normal'>Normal</option>
                    <option value='dry'>Dry</option>
                    <option value='dry'>Oily</option>
                </select>
            </div>
            <div>
               
                <select name='spf' value={filters.spf} onChange={handleChange}className='mar'>
                    <option value=''>SPF</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='30'>60</option>
                </select>
            </div>
            <div>
              
                <select name='formulation' value={filters.formulation} onChange={handleChange}className='mar'>
                    <option value=''>Formulation</option>
                    <option value='water'>Water</option>
                    <option value='silicone'>Silicone</option>
                </select>
            </div>
                  </div>

                </div>
              
            </div>
            <div className='col-lg-8 section1'>
                {products.map((product) => (
                    product.category === "moisturizer" && (
                        <div key={product.id} >
                            <div className='product white' onClick={() => getPData(product.id, product)}>
                                <h2 className='head'>{product.title}</h2>
                                <img
                                    src={`/files/${product.image[0].filename}`}
                                    alt='productimage'
                                    className='product-image'
                                />
                                <p className='description'>{product.description} </p>
                                <p className='price' >${product.price}</p>
                                <button className='change' onClick={() => addToCart(product)}>Add to cart</button>
                                <div className='user-details'></div>
                            </div>
                        </div>
                    )
                ))}
            </div>
                
            </div>
        </div>

        
        <div className='conatiner-fluid pink'>
    <div className='row'>
     <div className='col-lg-4 ms-4'>
    <img src='./pic1.avif' className='ms-5 up'/>
       </div>
       <div className='col-lg-4 ms-3'>
    <img src='./pic2.avif ' className='up'/>
       </div>
       <div className='col-lg-3 '>
    <img src='./pic3.avif'className='up'/>
       </div>
      
            </div>
        </div>
        </>
    );
};




const Sunscreen = () => {
    const [products2, setProducts2] = useState([]);
    const navigate = useNavigate();
    const [index2, setIndex2] = useState(0);
    const slidesRef2 = useRef([]);
    useEffect(() => {
        fetchProducts2();
    }, []);
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

    const fetchProducts2 = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/sunscreen');
            setProducts2(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getPData2 = (id, product) => {
        console.log(`Product ID: ${id}, Title: ${product.title}`);
    };

    const addToCart2 = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        navigate('/cart');
    };
    
    const [filters, setFilters] = useState({
        brand: '',
        price: '',
        discount: '',
        preference: '',
        skinType: '',
        spf: '',
        formulation: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div>
        
            <div className='container-fluid mt-5 mt-5'>
            <div className='row me-3'>
                    <div id="slider2">
                        <div className="slides" ref={(el) => (slidesRef2.current[0] = el)}>
                            <img src="./sun1.avif" alt="Slide 1" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[1] = el)}>
                            <img src="./sun2.avif" alt="Slide 2" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[2] = el)}>
                            <img src="./sun3.avif" alt="Slide 3" width="100%" className='sidepic inc' />
                        </div>
                    </div>
                </div>
                <div className='row'>
            <div className='col-lg-3'>
                <div className='row'>
                    <div className='col-lg-6'>
                      
                    </div>
                    <div className='col-lg-6'>
                    <h4>Filters</h4>
            <div>
               
                <select name='brand' value={filters.brand} onChange={handleChange} className='mar'>
                    <option value='' >Brand</option>
                    <option value='brand1'>minimalist</option>
                    <option value='brand2'>Dot&key</option>
                </select>
            </div>
            <div>
            
                <select name='price' value={filters.price} onChange={handleChange} className='mar'>
                    <option value=''>price</option>
                    <option value='low'>Low to high</option>
                    <option value='high'>High to low</option>
                </select>
            </div>
            <div>
              
                <select name='discount' value={filters.discount} onChange={handleChange} className='mar'>
                    <option value=''>Discount</option>
                    <option value='5'>5%</option>
                    <option value='10'>10%</option>
                </select>
            </div>
            <div>
               
                <select name='preference' value={filters.preference} onChange={handleChange} className='mar'>
                    <option value=''>Preference</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>
            <div>
                
                <select name='skinType' value={filters.skinType} onChange={handleChange}className='mar'>
                    <option value=''>Skin Type</option>
                    <option value='normal'>Normal</option>
                    <option value='dry'>Dry</option>
                    <option value='dry'>Oily</option>
                </select>
            </div>
            <div>
               
                <select name='spf' value={filters.spf} onChange={handleChange}className='mar'>
                    <option value=''>SPF</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='30'>60</option>
                </select>
            </div>
            <div>
              
                <select name='formulation' value={filters.formulation} onChange={handleChange}className='mar'>
                    <option value=''>Formulation</option>
                    <option value='water'>Water</option>
                    <option value='silicone'>Silicone</option>
                </select>
            </div>
                  </div>
                </div>
              
            </div>
                <div className='col-lg-8 section1'>
                   {products2.map((product) => (
                    product.category === 'sunscreen' && (
                        <div key={product.id} className='col-lg-2'>
                            <div className='product white' onClick={() => getPData2(product.id, product)}>
                                <h2 className='head'>{product.title}</h2>
                                <img
                                    src={`/files/${product.image[0].filename}`}
                                    alt='productimage'
                                    className='product-image'
                                />
                                <p className='des'>{product.description}</p>
                                <p className='pri'>${product.price}</p>
                                <button className='change' onClick={() => addToCart2(product)}>
                                    Add to cart
                                </button>
                                <div className='user-details'></div>
                            </div>
                        </div>
                    )
                ))} 
                </div>
                
            </div>
        </div>
        <div className='conatiner-fluid pink'>
    <div className='row'>
     <div className='col-lg-4'>
    <img src='./pic1.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic2.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic3.avif'/>
       </div>
      
            </div>
        </div>
        </div>
        
    );
};




const Concealer = () => {
    const [products3, setProducts3] = useState([]);
    const navigate = useNavigate();
    const [index2, setIndex2] = useState(0);
    const slidesRef2 = useRef([]);
    useEffect(() => {
        fetchProducts3();
    }, []);

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
    
    const fetchProducts3 = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/concealer');
            setProducts3(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getPData3 = (id, product) => {
        console.log(`Product ID: ${id}, Title: ${product.title}`);
    };

    const addToCart3 = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        navigate('/cart');
    };
    
    const [filters, setFilters] = useState({
        brand: '',
        price: '',
        discount: '',
        preference: '',
        skinType: '',
        spf: '',
        formulation: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div>
             <div className='container-fluid mt-5 '>
             <div className='row mt-5'>
                    <div id="slider2">
                        <div className="slides me-3" ref={(el) => (slidesRef2.current[0] = el)}>
                            <img src="./con1.avif" alt="Slide 1" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[1] = el)}>
                            <img src="./con2.avif" alt="Slide 2" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides me-5" ref={(el) => (slidesRef2.current[2] = el)}>
                            <img src="./con3.avif" alt="Slide 3" width="100%" className='sidepic inc' />
                        </div>
                    </div>
                </div>

            <div className='row'>
            <div className='col-lg-3'>
                <div className='row'>
                    <div className='col-lg-6'>
                      
                    </div>
                    <div className='col-lg-6'>
                    <h4>Filters</h4>
            <div>
               
                <select name='brand' value={filters.brand} onChange={handleChange} className='mar'>
                    <option value='' >Brand</option>
                    <option value='brand1'>minimalist</option>
                    <option value='brand2'>Dot&key</option>
                </select>
            </div>
            <div>
            
                <select name='price' value={filters.price} onChange={handleChange} className='mar'>
                    <option value=''>price</option>
                    <option value='low'>Low to high</option>
                    <option value='high'>High to low</option>
                </select>
            </div>
            <div>
              
                <select name='discount' value={filters.discount} onChange={handleChange} className='mar'>
                    <option value=''>Discount</option>
                    <option value='5'>5%</option>
                    <option value='10'>10%</option>
                </select>
            </div>
            <div>
               
                <select name='preference' value={filters.preference} onChange={handleChange} className='mar'>
                    <option value=''>Preference</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>
            <div>
                
                <select name='skinType' value={filters.skinType} onChange={handleChange}className='mar'>
                    <option value=''>Skin Type</option>
                    <option value='normal'>Normal</option>
                    <option value='dry'>Dry</option>
                    <option value='dry'>Oily</option>
                </select>
            </div>
            <div>
               
                <select name='spf' value={filters.spf} onChange={handleChange}className='mar'>
                    <option value=''>SPF</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='30'>60</option>
                </select>
            </div>
            <div>
              
                <select name='formulation' value={filters.formulation} onChange={handleChange}className='mar'>
                    <option value=''>Formulation</option>
                    <option value='water'>Water</option>
                    <option value='silicone'>Silicone</option>
                </select>
            </div>
                  </div>
                </div>
              
            </div>

                <div className='col-lg-8 section1'>
                {products3.map((product) => (
                    product.category === 'concealer' && (
                        <div key={product.id} className='col-lg-2'>
                            <div className='product white' onClick={() => getPData3(product.id, product)}>
                                <h2 className='head'>{product.title}</h2>
                                <img
                                    src={`/files/${product.image[0].filename}`}
                                    alt='productimage'
                                    className='product-image'
                                />
                                <p className='description'>{product.description}</p>
                                <p className='price'>${product.price}</p>
                                <button className='change' onClick={() => addToCart3(product)}>
                                    Add to cart
                                </button>
                                <div className='user-details'></div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
        <div className='conatiner-fluid pink'>
    <div className='row'>
     <div className='col-lg-4'>
    <img src='./pic1.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic2.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic3.avif'/>
       </div>
      
            </div>
        </div>
        </div>
       </div>
    );
};



const CompactPowder = () => {
    const [products4, setProducts4] = useState([]);
    const navigate = useNavigate();
    const [index2, setIndex2] = useState(0);
    const slidesRef2 = useRef([]);
    useEffect(() => {
        fetchProducts4();
    }, []);

    const fetchProducts4 = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/compactpowder');
            setProducts4(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getPData4 = (id, product) => {
        console.log(`Product ID: ${id}, Title: ${product.title}`);
    };

    const addToCart4 = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        navigate('/cart');
    };
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
    
    
    const [filters, setFilters] = useState({
        brand: '',
        price: '',
        discount: '',
        preference: '',
        skinType: '',
        spf: '',
        formulation: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };
    return (
        <div>
         <div className='container-fluid'>
             <div className='row'>
                    <div id="slider2">
                        <div className="slides" ref={(el) => (slidesRef2.current[0] = el)}>
                            <img src="./slideimg.avif" alt="Slide 1" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[1] = el)}>
                            <img src="./slideimg2.avif" alt="Slide 2" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[2] = el)}>
                            <img src="./slideimg3.avif" alt="Slide 3" width="100%" className='sidepic inc' />
                        </div>
                    </div>
                </div>

            <div className='row'>
            <div className='col-lg-3'>
                <div className='row'>
                    <div className='col-lg-6'>
                      
                    </div>
                    <div className='col-lg-6'>
                    <h4>Filters</h4>
            <div>
               
                <select name='brand' value={filters.brand} onChange={handleChange} className='mar'>
                    <option value='' >Brand</option>
                    <option value='brand1'>minimalist</option>
                    <option value='brand2'>Dot&key</option>
                </select>
            </div>
            <div>
            
                <select name='price' value={filters.price} onChange={handleChange} className='mar'>
                    <option value=''>price</option>
                    <option value='low'>Low to high</option>
                    <option value='high'>High to low</option>
                </select>
            </div>
            <div>
              
                <select name='discount' value={filters.discount} onChange={handleChange} className='mar'>
                    <option value=''>Discount</option>
                    <option value='5'>5%</option>
                    <option value='10'>10%</option>
                </select>
            </div>
            <div>
               
                <select name='preference' value={filters.preference} onChange={handleChange} className='mar'>
                    <option value=''>Preference</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>
            <div>
                
                <select name='skinType' value={filters.skinType} onChange={handleChange}className='mar'>
                    <option value=''>Skin Type</option>
                    <option value='normal'>Normal</option>
                    <option value='dry'>Dry</option>
                    <option value='dry'>Oily</option>
                </select>
            </div>
            <div>
               
                <select name='spf' value={filters.spf} onChange={handleChange}className='mar'>
                    <option value=''>SPF</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='30'>60</option>
                </select>
            </div>
            <div>
              
                <select name='formulation' value={filters.formulation} onChange={handleChange}className='mar'>
                    <option value=''>Formulation</option>
                    <option value='water'>Water</option>
                    <option value='silicone'>Silicone</option>
                </select>
            </div>
                  </div>
                </div>
              
            </div>

                <div className='col-lg-8 section1'>
                {products4.map((product) => (
                    product.category === 'compactpowder' && (
                        <div key={product.id} className='col-lg-2'>
                            <div className='product white' onClick={() => getPData4(product.id, product)}>
                                <h2 className='head'>{product.title}</h2>
                                <img
                                    src={`/files/${product.image[0].filename}`}
                                    alt='productimage'
                                    className='product-image'
                                />
                                <p className='description'>{product.description}</p>
                                <p className='price'>${product.price}</p>
                                <button className='change' onClick={() => addToCart4(product)}>
                                    Add to cart
                                </button>
                                <div className='user-details'></div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
        <div className='conatiner-fluid pink'>
    <div className='row'>
     <div className='col-lg-4'>
    <img src='./pic1.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic2.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic3.avif'/>
       </div>
      
            </div>
        </div>
        </div>
       </div>
    );
};

const Foundation = () => {
    const [products5, setProducts5] = useState([]);
    const navigate = useNavigate();
    const [index2, setIndex2] = useState(0);
    const slidesRef2 = useRef([]);
    useEffect(() => {
        fetchProducts5();
    }, []);

    const fetchProducts5 = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/foundation');
            setProducts5(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getPData5 = (id, product) => {
        console.log(`Product ID: ${id}, Title: ${product.title}`);
    };

    const addToCart5 = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        navigate('/cart');
    };
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

    
    const [filters, setFilters] = useState({
        brand: '',
        price: '',
        discount: '',
        preference: '',
        skinType: '',
        spf: '',
        formulation: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div>
            <div className='container-fluid'>
             <div className='row'>
                    <div id="slider2">
                        <div className="slides" ref={(el) => (slidesRef2.current[0] = el)}>
                            <img src="./found1.avif" alt="Slide 1" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[1] = el)}>
                            <img src="./found2.avif" alt="Slide 2" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[2] = el)}>
                            <img src="./found3.avif" alt="Slide 3" width="100%" className='sidepic inc' />
                        </div>
                    </div>
                </div>

            <div className='row'>
            <div className='col-lg-3'>
                <div className='row'>
                    <div className='col-lg-6'>
                      
                    </div>
                    <div className='col-lg-6'>
                    <h4>Filters</h4>
            <div>
               
                <select name='brand' value={filters.brand} onChange={handleChange} className='mar'>
                    <option value='' >Brand</option>
                    <option value='brand1'>minimalist</option>
                    <option value='brand2'>Dot&key</option>
                </select>
            </div>
            <div>
            
                <select name='price' value={filters.price} onChange={handleChange} className='mar'>
                    <option value=''>price</option>
                    <option value='low'>Low to high</option>
                    <option value='high'>High to low</option>
                </select>
            </div>
            <div>
              
                <select name='discount' value={filters.discount} onChange={handleChange} className='mar'>
                    <option value=''>Discount</option>
                    <option value='5'>5%</option>
                    <option value='10'>10%</option>
                </select>
            </div>
            <div>
               
                <select name='preference' value={filters.preference} onChange={handleChange} className='mar'>
                    <option value=''>Preference</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>
            <div>
                
                <select name='skinType' value={filters.skinType} onChange={handleChange}className='mar'>
                    <option value=''>Skin Type</option>
                    <option value='normal'>Normal</option>
                    <option value='dry'>Dry</option>
                    <option value='dry'>Oily</option>
                </select>
            </div>
            <div>
               
                <select name='spf' value={filters.spf} onChange={handleChange}className='mar'>
                    <option value=''>SPF</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='30'>60</option>
                </select>
            </div>
            <div>
              
                <select name='formulation' value={filters.formulation} onChange={handleChange}className='mar'>
                    <option value=''>Formulation</option>
                    <option value='water'>Water</option>
                    <option value='silicone'>Silicone</option>
                </select>
            </div>
                  </div>
                </div>
              
            </div>

                <div className='col-lg-8 section1'>
                {products5.map((product) => (
                    product.category === 'foundation' && (
                        <div key={product.id} className='col-lg-2'>
                            <div className='product white' onClick={() => getPData5(product.id, product)}>
                                <h2 className='head'>{product.title}</h2>
                                <img
                                    src={`/files/${product.image[0].filename}`}
                                    alt='productimage'
                                    className='product-image'
                                />
                                <p className='description'>{product.description}</p>
                                <p className='price'>${product.price}</p>
                                <button className='change' onClick={() => addToCart5(product)}>
                                    Add to cart
                                </button>
                                <div className='user-details'></div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
        <div className='conatiner-fluid'>
            <div className='row'>
<div className='col-lg-4'>
    <img src='./pic1.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic2.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic3.avif'/>
       </div>
      
            </div>
        </div>
        </div>
        </div>
    );
};




const Primer = () => {
    const [products6, setProducts6] = useState([]);
    const navigate = useNavigate();
    const [index2, setIndex2] = useState(0);
    const slidesRef2 = useRef([]);
    useEffect(() => {
        fetchProducts6();
    }, []);

    const fetchProducts6 = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/primer');
            setProducts6(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getPData6 = (id, product) => {
        console.log(`Product ID: ${id}, Title: ${product.title}`);
    };

    const addToCart6 = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        navigate('/cart');
    };useEffect(() => {
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

    const [filters, setFilters] = useState({
        brand: '',
        price: '',
        discount: '',
        preference: '',
        skinType: '',
        spf: '',
        formulation: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div>
            <div className='container-fluid'>
             <div className='row'>
                    <div id="slider2">
                        <div className="slides" ref={(el) => (slidesRef2.current[0] = el)}>
                            <img src="./slideimg.avif" alt="Slide 1" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[1] = el)}>
                            <img src="./slideimg2.avif" alt="Slide 2" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[2] = el)}>
                            <img src="./slideimg3.avif" alt="Slide 3" width="100%" className='sidepic inc' />
                        </div>
                    </div>
                </div>

            <div className='row'>
            <div className='col-lg-3'>
                <div className='row'>
                    <div className='col-lg-6'>
                      
                    </div>
                    <div className='col-lg-6'>
                    <h4>Filters</h4>
            <div>
               
                <select name='brand' value={filters.brand} onChange={handleChange} className='mar'>
                    <option value='' >Brand</option>
                    <option value='brand1'>minimalist</option>
                    <option value='brand2'>Dot&key</option>
                </select>
            </div>
            <div>
            
                <select name='price' value={filters.price} onChange={handleChange} className='mar'>
                    <option value=''>price</option>
                    <option value='low'>Low to high</option>
                    <option value='high'>High to low</option>
                </select>
            </div>
            <div>
              
                <select name='discount' value={filters.discount} onChange={handleChange} className='mar'>
                    <option value=''>Discount</option>
                    <option value='5'>5%</option>
                    <option value='10'>10%</option>
                </select>
            </div>
            <div>
               
                <select name='preference' value={filters.preference} onChange={handleChange} className='mar'>
                    <option value=''>Preference</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>
            <div>
                
                <select name='skinType' value={filters.skinType} onChange={handleChange}className='mar'>
                    <option value=''>Skin Type</option>
                    <option value='normal'>Normal</option>
                    <option value='dry'>Dry</option>
                    <option value='dry'>Oily</option>
                </select>
            </div>
            <div>
               
                <select name='spf' value={filters.spf} onChange={handleChange}className='mar'>
                    <option value=''>SPF</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='30'>60</option>
                </select>
            </div>
            <div>
              
                <select name='formulation' value={filters.formulation} onChange={handleChange}className='mar'>
                    <option value=''>Formulation</option>
                    <option value='water'>Water</option>
                    <option value='silicone'>Silicone</option>
                </select>
            </div>
                  </div>
                </div>
              
            </div>

                <div className='col-lg-8 section1'>
                {products6.map((product) => (
                    product.category === 'primer' && (
                        <div key={product.id} className='col-lg-2'>
                            <div className='product white' onClick={() => getPData6(product.id, product)}>
                                <h2 className='head'>{product.title}</h2>
                                <img
                                    src={`/files/${product.image[0].filename}`}
                                    alt='productimage'
                                    className='product-image'
                                />
                                <p className='description'>{product.description}</p>
                                <p className='price'>${product.price}</p>
                                <button className='change' onClick={() => addToCart6(product)}>
                                    Add to cart
                                </button>
                                <div className='user-details'></div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
        <div className='conatiner-fluid pink'>
    <div className='row'>
     <div className='col-lg-4'>
    <img src='./pic1.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic2.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic3.avif'/>
       </div>
      
            </div>
        </div>
        </div>
       </div>
    );
};



  
const NailPolish = () => {
    const [products7, setProducts7] = useState([]);
    const navigate = useNavigate();
    const [index2, setIndex2] = useState(0);
    const slidesRef2 = useRef([]);
    useEffect(() => {
        fetchProducts7();
    }, []);

    const fetchProducts7 = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/nailpolish');
            setProducts7(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getPData7 = (id, product) => {
        console.log(`Product ID: ${id}, Title: ${product.title}`);
    };

    const addToCart7 = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        navigate('/cart');
    };
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

    
    const [filters, setFilters] = useState({
        brand: '',
        price: '',
        discount: '',
        preference: '',
        skinType: '',
        spf: '',
        formulation: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div>
            <div className='container-fluid mt-5'>
             <div className='row'>
                    <div id="slider2">
                        <div className="slides" ref={(el) => (slidesRef2.current[0] = el)}>
                            <img src="./nail1.avif" alt="Slide 1" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[1] = el)}>
                            <img src="./nail2.avif" alt="Slide 2" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[2] = el)}>
                            <img src="./nail3.avif" alt="Slide 3" width="100%" className='sidepic inc' />
                        </div>
                    </div>
                </div>

            <div className='row'>
            <div className='col-lg-3'>
                <div className='row'>
                    <div className='col-lg-6'>
                      
                    </div>
                    <div className='col-lg-6'>
                    <h4>Filters</h4>
            <div>
               
                <select name='brand' value={filters.brand} onChange={handleChange} className='mar'>
                    <option value='' >Brand</option>
                    <option value='brand1'>minimalist</option>
                    <option value='brand2'>Dot&key</option>
                </select>
            </div>
            <div>
            
                <select name='price' value={filters.price} onChange={handleChange} className='mar'>
                    <option value=''>price</option>
                    <option value='low'>Low to high</option>
                    <option value='high'>High to low</option>
                </select>
            </div>
            <div>
              
                <select name='discount' value={filters.discount} onChange={handleChange} className='mar'>
                    <option value=''>Discount</option>
                    <option value='5'>5%</option>
                    <option value='10'>10%</option>
                </select>
            </div>
            <div>
               
                <select name='preference' value={filters.preference} onChange={handleChange} className='mar'>
                    <option value=''>Preference</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>
            <div>
                
                <select name='skinType' value={filters.skinType} onChange={handleChange}className='mar'>
                    <option value=''>Skin Type</option>
                    <option value='normal'>Normal</option>
                    <option value='dry'>Dry</option>
                    <option value='dry'>Oily</option>
                </select>
            </div>
            <div>
               
                <select name='spf' value={filters.spf} onChange={handleChange}className='mar'>
                    <option value=''>SPF</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='30'>60</option>
                </select>
            </div>
            <div>
              
                <select name='formulation' value={filters.formulation} onChange={handleChange}className='mar'>
                    <option value=''>Formulation</option>
                    <option value='water'>Water</option>
                    <option value='silicone'>Silicone</option>
                </select>
            </div>
                  </div>
                </div>
              
            </div>

                <div className='col-lg-8 section1'>
                {products7.map((product) => (
                    product.category === 'nailpolish' && (
                        <div key={product.id} className='col-lg-2'>
                            <div className='product-box white' onClick={() => getPData7(product.id, product)}>
                                <h2 className='head'>{product.title}</h2>
                                <img
                                    src={`/files/${product.image[0].filename}`}
                                    alt='productimage'
                                    className='product-image'
                                />
                                <p className='description'>{product.description}</p>
                                <p className='price'>${product.price}</p>
                                <button className='change' onClick={() => addToCart7(product)}>
                                    Add to cart
                                </button>
                                <div className='user-details'></div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
        <div className='conatiner-fluid pink'>
    <div className='row'>
     <div className='col-lg-4'>
    <img src='./pic1.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic2.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic3.avif'/>
       </div>
      
            </div>
        </div>
        </div>
       </div>
    );
};
  
 



const Eyeliner = () => {
    const [products8, setProducts8] = useState([]);
    const navigate = useNavigate();
    const [index2, setIndex2] = useState(0);
    const slidesRef2 = useRef([]);
    useEffect(() => {
        fetchProducts8();
    }, []);

    const fetchProducts8 = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/eyeliner');
            setProducts8(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const getPData8 = (id, product) => {
        console.log(`Product ID: ${id}, Title: ${product.title}`);
    };

    const addToCart8 = (product) => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(product);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        navigate('/cart');
    };
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

    
    const [filters, setFilters] = useState({
        brand: '',
        price: '',
        discount: '',
        preference: '',
        skinType: '',
        spf: '',
        formulation: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFilters({ ...filters, [name]: value });
    };

    return (
        <div>
             <div className='container-fluid mt-5'>
             <div className='row mt-5'>
                    <div id="slider2">
                        <div className="slides" ref={(el) => (slidesRef2.current[0] = el)}>
                            <img src="./eye1.avif" alt="Slide 1" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[1] = el)}>
                            <img src="./eye2.avif" alt="Slide 2" width="100%" className='sidepic inc' />
                        </div>

                        <div className="slides" ref={(el) => (slidesRef2.current[2] = el)}>
                            <img src="./eye3.avif" alt="Slide 3" width="100%" className='sidepic inc' />
                        </div>
                    </div>
                </div>

            <div className='row'>
            <div className='col-lg-3'>
                <div className='row'>
                    <div className='col-lg-6'>
                      
                    </div>
                    <div className='col-lg-6'>
                    <h4>Filters</h4>
            <div>
               
                <select name='brand' value={filters.brand} onChange={handleChange} className='mar'>
                    <option value='' >Brand</option>
                    <option value='brand1'>minimalist</option>
                    <option value='brand2'>Dot&key</option>
                </select>
            </div>
            <div>
            
                <select name='price' value={filters.price} onChange={handleChange} className='mar'>
                    <option value=''>price</option>
                    <option value='low'>Low to high</option>
                    <option value='high'>High to low</option>
                </select>
            </div>
            <div>
              
                <select name='discount' value={filters.discount} onChange={handleChange} className='mar'>
                    <option value=''>Discount</option>
                    <option value='5'>5%</option>
                    <option value='10'>10%</option>
                </select>
            </div>
            <div>
               
                <select name='preference' value={filters.preference} onChange={handleChange} className='mar'>
                    <option value=''>Preference</option>
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                </select>
            </div>
            <div>
                
                <select name='skinType' value={filters.skinType} onChange={handleChange}className='mar'>
                    <option value=''>Skin Type</option>
                    <option value='normal'>Normal</option>
                    <option value='dry'>Dry</option>
                    <option value='dry'>Oily</option>
                </select>
            </div>
            <div>
               
                <select name='spf' value={filters.spf} onChange={handleChange}className='mar'>
                    <option value=''>SPF</option>
                    <option value='15'>15</option>
                    <option value='30'>30</option>
                    <option value='30'>60</option>
                </select>
            </div>
            <div>
              
                <select name='formulation' value={filters.formulation} onChange={handleChange}className='mar'>
                    <option value=''>Formulation</option>
                    <option value='water'>Water</option>
                    <option value='silicone'>Silicone</option>
                </select>
            </div>
                  </div>
                </div>
              
            </div>

                <div className='col-lg-8 section1'>
                {products8.map((product) => (
                    product.category === 'eyeliner' && (
                        <div key={product.id} className='col-lg-2'>
                            <div className='product-box white' onClick={() => getPData8(product.id, product)}>
                                <h2 className='head'>{product.title}</h2>
                                <img
                                    src={`/files/${product.image[0].filename}`}
                                    alt='productimage'
                                    className='product-image'
                                />
                                <p className='description'>{product.description}</p>
                                <p className='price'>${product.price}</p>
                                <button className='change' onClick={() => addToCart8(product)}>
                                    Add to cart
                                </button>
                                <div className='user-details'></div>
                            </div>
                        </div>
                    )
                ))}
            </div>
        </div>
        <div className='conatiner-fluid pink'>
    <div className='row'>
     <div className='col-lg-4'>
    <img src='./pic1.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic2.avif'/>
       </div>
       <div className='col-lg-4'>
    <img src='./pic3.avif'/>
       </div>
      
            </div>
        </div>
        </div>
       </div>
    );
};
  
  export {Moisturizer,Sunscreen,Concealer,CompactPowder,Foundation,Primer,NailPolish,Eyeliner};