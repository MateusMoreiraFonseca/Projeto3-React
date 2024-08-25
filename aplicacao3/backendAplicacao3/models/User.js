const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const saltRounds = 10; // O número de rounds para o salt

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

// Middleware para criptografar a senha antes de salvar o usuário
userSchema.pre('save', function (next) {
  const user = this;

  // Apenas criptografa a senha se ela foi modificada ou é nova
  if (!user.isModified('senha')) return next();

  // Gera um salt e usa-o para criptografar a senha
  bcrypt.hash(user.senha, saltRounds, function (err, hash) {
    if (err) return next(err);
    user.senha = hash;
    next();
  });
});

// Método para comparar a senha fornecida com a senha criptografada
userSchema.methods.comparePassword = function (candidatePassword, callback) {
  bcrypt.compare(candidatePassword, this.senha, function (err, isMatch) {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
