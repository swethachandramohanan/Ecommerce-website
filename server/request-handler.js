
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import userSchema from "../schema/user.schema.js";
import productSchema from '../schema/product.schema.js';
const { sign } = jwt;

export async function user(req, res) {
  try {
    const { name, password, email, phoneNumber } = req.body;
    const { profile } = req.files;
    const isSeller = req.body.isSeller === 'true';

    const userExist = await userSchema.findOne({ name });

    if (userExist) {
      return res.status(400).send('Username already exists!!!');
    }

    const hashPass = await bcrypt.hash(password, 10);
    const result = await userSchema.create({
      name,
      password: hashPass,
      email,
      phoneNumber,
      profile,
      isSeller,
    });

    if (result) {
      return res.json('Registration Successful');
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send('Error occurred');
  }
}

export async function login(req, res) {
  try {
    const { name, password } = req.body;
    const user = await userSchema.findOne({name });

    if (!user) {
      return res.status(401).json({ error: "Invalid username or password" });
    }
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = sign(
      {
       name: user.name,
        id: user._id,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: "24h",
      }
    );

    res.status(200).json({
      msg: "Login Successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error occurred" });
  }
}

export async function getPrivateData(req, res) {
  try {
    const userId = req.user.id;
    const userData = await userSchema.findById(userId);
    res.status(200).json(userData);
  } catch (error) {
    console.error('Error fetching private data:', error);
    res.status(500).json({ error: 'Error fetching private data' });
  }
}

export async function getNewsData(req, res) {
  try {
    const newsData = await userSchema.find();
    res.status(200).json(newsData);
  } catch (error) {
    console.error('Error fetching news data:', error);
    res.status(500).json({ error: 'Error fetching news data' });
  }
}

export async function getUserProducts (req, res) {
  try {
    const userId = req.params.userId;
    const userProducts = await productSchema.find({ userId });

    res.json(userProducts);
  } catch (error) {
    console.error('Error fetching user products:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// export async function cart(req,res)
// {
//   try {
//     const result = await productSchema.find({});
//     res.status(200).json(result);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'An error occurred while retrieving the items.' });
//   }
// }



export const Product1 = async (req, res) => {
  try {
    const { title, description, price, quantity,category } = req.body;
    const { image } = req.files;

    const result = await productSchema.create({
      title,
      description,
      price,
      quantity,
      image,
      category
    });

    if (result) {
      return res.json('Product added successfully!');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error occurred while submitting the product.');
  }
};

export const Product2 = async (req, res) => {
  try {
    const { title, description, price, quantity,category } = req.body;
    const { image } = req.files;

   
    const result = await productSchema.create({
      title,
      description,
      price,
      quantity,
      image,
      category
    });

    if (result) {
      return res.json('Product added successfully!');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error occurred while submitting the product.');
  }
};



export const Product3 = async (req, res) => {
  try {
    const { title, description, price, quantity,category } = req.body;
    const { image } = req.files;

   
    const result = await productSchema.create({
      title,
      description,
      price,
      quantity,
      image,
      category
    });

    if (result) {
      return res.json('Product added successfully!');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error occurred while submitting the product.');
  }
};





export const Product4 = async (req, res) => {
  try {
    const { title, description, price, quantity,category } = req.body;
    const { image } = req.files;

   
    const result = await productSchema.create({
      title,
      description,
      price,
      quantity,
      image,
      category
    });

    if (result) {
      return res.json('Product added successfully!');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error occurred while submitting the product.');
  }
};

export const Product5 = async (req, res) => {
  try {
    const { title, description, price, quantity,category } = req.body;
    const { image } = req.files;

   
    const result = await productSchema.create({
      title,
      description,
      price,
      quantity,
      image,
      category
    });

    if (result) {
      return res.json('Product added successfully!');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error occurred while submitting the product.');
  }
};



export const Product6 = async (req, res) => {
  try {
    const { title, description, price, quantity,category } = req.body;
    const { image } = req.files;

   
    const result = await productSchema.create({
      title,
      description,
      price,
      quantity,
      image,
      category
    });

    if (result) {
      return res.json('Product added successfully!');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error occurred while submitting the product.');
  }
};


export const Product7 = async (req, res) => {
  try {
    const { title, description, price, quantity,category } = req.body;
    const { image } = req.files;

   
    const result = await productSchema.create({
      title,
      description,
      price,
      quantity,
      image,
      category
    });

    if (result) {
      return res.json('Product added successfully!');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error occurred while submitting the product.');
  }
};



export const Product8 = async (req, res) => {
  try {
    const { title, description, price, quantity,category } = req.body;
    const { image } = req.files;

   
    const result = await productSchema.create({
      title,
      description,
      price,
      quantity,
      image,
      category
    });

    if (result) {
      return res.json('Product added successfully!');
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send('Error occurred while submitting the product.');
  }
};

export const moisturizer = async (req, res) => {
  try {
    const result = await productSchema.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the Moisturizer items.' });
  }
}




export const sunscreen= async(req,res)=>{
  try {
    const result = await productSchema.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the sunscreen items.' });
  }
};


export const concealer= async(req,res)=>{
  try {
    const result = await productSchema.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the sunscreen items.' });
  }
};

export const compactpowder= async(req,res)=>{
  try {
    const result = await productSchema.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the sunscreen items.' });
  }
};


export const foundation= async(req,res)=>{
  try {
    const result = await productSchema.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the sunscreen items.' });
  }
};


export const primer= async(req,res)=>{
  try {
    const result = await productSchema.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the sunscreen items.' });
  }
};


export const nailpolish= async(req,res)=>{
  try {
    const result = await productSchema.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the sunscreen items.' });
  }
};


export const eyeliner= async(req,res)=>{
  try {
    const result = await productSchema.find({});
    res.status(200).json(result);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while retrieving the sunscreen items.' });
  }
};






















// // export async function register(req, res) {
// //   try {
// //     const {
// //       name,
// //       category,
// //       description,
// //       language,
// //       duration,
// //       ratings,
// //       votes,
// //       year,
// //     } = req.body;

// //     const { banner, poster } = req.files;

// //     const result = await loginSchema.create({
// //       name,
// //       category,
// //       description,
// //       language,
// //       duration,
// //       ratings,
// //       votes,
// //       year,
// //       banner,
// //       poster,
// //     });

// //     if (result) {
// //       return res.json("Registration Successful");
// //     }
// //   } catch (error) {
// //     console.error(error);
// //     return res.status(500).send("Error occurred");
// //   }
// // }

// // export async function updateItem(req, res) {
// //   try {
// //     const { name, category, description, language, duration, ratings, votes, year, banner, poster } = req.body;

// //     const existingMovie = await Movies.findOne({ name });

// //     if (!existingMovie) {
// //       return res.status(404).json({ error: 'Movie not found' });
// //     }

// //     existingMovie.category = category;
// //     existingMovie.description = description;
// //     existingMovie.language = language;
// //     existingMovie.duration = duration;
// //     existingMovie.ratings = ratings;
// //     existingMovie.votes = votes;
// //     existingMovie.year = year;
// //     existingMovie.banner = banner;
// //     existingMovie.poster = poster;
// //     await existingMovie.save();

// //     res.json({ message: 'Movie updated successfully!', updatedMovie: existingMovie });
// //   } catch (error) {
// //     console.error('Error updating movie:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // }

// // export async function addToDatabase(req, res) {
// //   try {
// //     const { name, category, description, language, duration, ratings, votes, year, banner, poster } = req.body;
// //     const newMovie = new Movies({ name, category, description, language, duration, ratings, votes, year, banner, poster });
// //     await newMovie.save();
// //     res.json({ message: 'Movie added to the database!' });
// //   } catch (error) {
// //     console.error('Error adding movie to the database:', error);
// //     res.status(500).json({ error: 'Internal Server Error' });
// //   }
// // }
