import React, { useState } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom'; 


const Product1 = () => {
  const navigate = useNavigate();
  const [moisturizer, setMoisturizer] = useState(0);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [image, setImage] = useState(null);
  const [category, setcategory] = useState('moisturizer');
 
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('quantity', quantity); 
      formData.append('image', image);
      formData.append('category',category);
      setMoisturizer(prevMoisturizer => prevMoisturizer + parseInt(quantity, 10));
      navigate('/product1');
      const response = await axios.post('http://localhost:3000/api/Product1', formData);

      if (response.status === 200) {
        alert('Product submitted successfully!');

        setTitle('');
        setDescription('');
        setPrice('');
        setQuantity('');
        setImage(null);
        setcategory('moisturizer')
        
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while submitting the product.');
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };
 
  return (
    
    <form className="product-form mt-5" onSubmit={handleSubmit}>
    
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />

      <label htmlFor="description">Description:</label>
      <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />

      <label htmlFor="price">Price:</label>
      <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />

      <label htmlFor="quantity">Quantity:</label>
      <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />

      <p>Total Moisturizer Quantity: {moisturizer}</p>

      <label htmlFor="image">Image:</label>
      <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />

      <label htmlFor="category">Category:</label>
      <input type="text" id="category" name="category" value={category} required  />
      
      <button type="submit" className='buttonlog'>Submit</button>
    </form>
  );
};





  const Product2 = () => {
    const navigate = useNavigate();
    const [sunscreen, setSunscreen] = useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [category, setcategory] = useState('sunscreen');
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('quantity', quantity); 
        formData.append('image', image);
        formData.append('category',category);
        setSunscreen(prevSunscreen => prevSunscreen + parseInt(quantity, 10));
  
        const response = await axios.post('http://localhost:3000/api/Product2', formData);
  
        if (response.status === 200) {
          alert('Product submitted successfully!');
  
          setTitle('');
          setDescription('');
          setPrice('');
          setQuantity('');
          setImage(null);
          setcategory('sunscreen')
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the product.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
  
    return (
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
  
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
  
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
  
        <label htmlFor=" category"> category:</label>
        <input type="text" id=" category" name=" category" value={ category}   />
        <p>Total Sunscreen Quantity: {sunscreen}</p>
        <button type="submit" className='buttonlog'>Submit</button>
      </form>
    );
  };


  const Product3 = () => {
    const navigate = useNavigate();
    const[concealer,setConcealer]=useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [category, setcategory] = useState('concealer');
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('quantity', quantity); 
        formData.append('image', image);
  formData.append('category',category);
     setConcealer(prevConcealer => prevConcealer + parseInt(quantity, 10));
  
        const response = await axios.post('http://localhost:3000/api/Product3', formData);
  
        if (response.status === 200) {
          alert('Product submitted successfully!');
  
          setTitle('');
          setDescription('');
          setPrice('');
          setQuantity('');
          setImage(null);
          setcategory('concealer') 
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the product.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
  
    return (
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
  
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
  
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
  
        <label htmlFor=" category"> category:</label>
        <input type="text" id=" category" name=" category" value={ category}  required />
        <p>Total Moisturizer Conealer: {concealer}</p>
        <button type="submit" className='buttonlog'>Submit</button>
      </form>
    );
  };

  const Product4 = () => {
    const navigate = useNavigate();
     const[compactpowder,setCompactpowder]=useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [category, setcategory] = useState('compactpowder');
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('quantity', quantity); 
        formData.append('image', image);
  formData.append('category',category);
  setCompactpowder(prevCompactpowder => prevCompactpowder + parseInt(quantity, 10)); 
  
        const response = await axios.post('http://localhost:3000/api/Product4', formData);
  
        if (response.status === 200) {
          alert('Product submitted successfully!');
  
          setTitle('');
          setDescription('');
          setPrice('');
          setQuantity('');
          setImage(null);
          setcategory('compactpowder') 
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the product.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };

    return (
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
  
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
  
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
  
        <label htmlFor=" category"> category:</label>
        <input type="text" id=" category" name=" category" value={ category}  required />
        <p>Total CompactPowder Quantity: {compactpowder}</p>
        <button type="submit" className='buttonlog'>Submit</button>
      </form>
    );
  };

  const Product5 = () => {
    const navigate = useNavigate();
    const[foundation,setFoundation]=useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [category, setcategory] = useState('foundation');
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('quantity', quantity); 
        formData.append('image', image);
  formData.append('category',category);
  setFoundation(prevFoundation=> prevFoundation + parseInt(quantity, 10)); 
  
        const response = await axios.post('http://localhost:3000/api/Product5', formData);
  
        if (response.status === 200) {
          alert('Product submitted successfully!');
  
          setTitle('');
          setDescription('');
          setPrice('');
          setQuantity('');
          setImage(null);
          setcategory('foundation') 
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the product.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };
 
    return (
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
  
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
  
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
  
        <label htmlFor=" category"> category:</label>
        <input type="text" id=" category" name=" category" value={ category}  required />
        <p>Total Foundation Quantity: {foundation}</p>
        <button type="submit" className='buttonlog'>Submit</button>
      </form>
    );
  };



  const Product6 = () => {
    const navigate = useNavigate();
    const[primer,setPrimer]=useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [category, setcategory] = useState('primer');
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('quantity', quantity); 
        formData.append('image', image);
  formData.append('category',category);
  setPrimer(prevPrimer => prevPrimer + parseInt(quantity, 10));
  
        const response = await axios.post('http://localhost:3000/api/Product6', formData);
  
        if (response.status === 200) {
          alert('Product submitted successfully!');
  
          setTitle('');
          setDescription('');
          setPrice('');
          setQuantity('');
          setImage(null);
          setcategory('primer')
        } 
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the product.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };

    return (
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
  
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
  
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
  
        <label htmlFor=" category"> category:</label>
        <input type="text" id=" category" name=" category" value={ category}  required/>
        <p>Total Primer Quantity: {primer}</p>
        <button type="submit" className='buttonlog'>Submit</button>
      </form>
    );
  };


  const Product7 = () => {
    const navigate = useNavigate();
    const[nailpolish,setNailpolish]=useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [category, setcategory] = useState('nailpolish');
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('quantity', quantity); 
        formData.append('image', image);
  formData.append('category',category);
  setNailpolish(prevNailpolish => prevNailpolish + parseInt(quantity, 10));
  
        const response = await axios.post('http://localhost:3000/api/Product7', formData);
  
        if (response.status === 200) {
          alert('Product submitted successfully!');
  
          setTitle('');
          setDescription('');
          setPrice('');
          setQuantity('');
          setImage(null);
          setcategory('nailpolish')
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the product.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };

    return (
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
  
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
  
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
  
        <label htmlFor=" category"> category:</label>
        <input type="text" id=" category" name=" category" value={ category}  required/>
        <p>Total Nailpolish Quantity: {nailpolish}</p>
        <button type="submit" className='buttonlog'>Submit</button>
      </form>
    );
  };






  const Product8 = () => {
    const navigate = useNavigate();
    const[eyeliner,setEyeliner]=useState(0);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [image, setImage] = useState(null);
    const [category, setcategory] = useState('eyeliner');
    const handleSubmit = async (event) => {
      event.preventDefault();
  
      try {
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('quantity', quantity); 
        formData.append('image', image);
  formData.append('category',category);
  setEyeliner(prevEyeliner=> prevEyeliner + parseInt(quantity, 10));
  
        const response = await axios.post('http://localhost:3000/api/Product8', formData);
  
        if (response.status === 200) {
          alert('Product submitted successfully!');
  
          setTitle('');
          setDescription('');
          setPrice('');
          setQuantity('');
          setImage(null);
          setcategory('eyeliner') 
        }
      } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while submitting the product.');
      }
    };
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setImage(file);
    };

    return (
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
  
        <label htmlFor="description">Description:</label>
        <textarea id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
  
        <label htmlFor="price">Price:</label>
        <input type="text" id="price" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
  
        <label htmlFor="quantity">Quantity:</label>
        <input type="number" id="quantity" name="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
  
        <label htmlFor="image">Image:</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleImageChange} required />
  
        <label htmlFor=" category"> category:</label>
        <input type="text" id=" category" name=" category" value={ category}  required  />

        <p>Total Eyeliner Quantity: {eyeliner}</p>
        <button type="submit" className='buttonlog'>Submit</button>
      </form>
    );
  };
export {Product1,Product2,Product3,Product4,Product5,Product6,Product7,Product8} ;
