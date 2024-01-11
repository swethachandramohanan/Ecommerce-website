import mongoose from "mongoose";
const schema = new mongoose.Schema({
    title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  quantity: {
    type: String,
    required: true,
    
  },
    image : {
        type : Object ,
        required : true
    },
    category:{
      type:String,
      required:true
    }
});
export default mongoose.model.products|| mongoose.model("product", schema);