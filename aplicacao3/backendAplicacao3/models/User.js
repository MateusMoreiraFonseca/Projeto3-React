const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Defina o esquema do usuário
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  senha: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'user'],
    default: 'user',
  },
});

// Crie o modelo
const User = mongoose.model('User', userSchema);

module.exports = User;
