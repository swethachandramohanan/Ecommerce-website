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
    }
});
export default mongoose.model.eyeliners|| mongoose.model("eyeliner", schema);