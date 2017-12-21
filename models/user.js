const mongoose = require('mongoose');
const { Schema } = mongoose;


const userSchema = new Schema({
  googleID: {
    type: String,
    required: true,
    unique: true,
  }
})


mongoose.model('users', userSchema);