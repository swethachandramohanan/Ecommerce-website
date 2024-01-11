import mongoose from "mongoose";
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  isSeller: {
    type: Boolean,
    default: false,
  },
    profile : {
        type : Object ,
        required : true
    }
});
export default mongoose.model.news || mongoose.model("new", schema);