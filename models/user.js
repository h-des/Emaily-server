const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  googleID: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String
  },
  img: {
    type: String
  },
  credits: {
    type: Number,
    defult: 0
  }
})


mongoose.model('users', userSchema);