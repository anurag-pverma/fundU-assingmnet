import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchma = new Schema({
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: false},
  profilePicture: {type: String, required: false},
  id: {type: String}
});

export default new mongoose.model("User", userSchma);
