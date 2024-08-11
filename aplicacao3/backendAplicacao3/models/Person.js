const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'], 
    required: true,
  },
  birthday: {
    type: Date,
    required: true,
  },
  address: {
    street: String,
    streetName: String,
    city: String,
    country: String,
  },
  email: String,
  phone: String,
  foto: { 
    type: String,
    default: '' 
  },
  id: {
    type: Number,
    unique: true,
  }
});
const Person = mongoose.model('Person', personSchema);

module.exports = Person;
