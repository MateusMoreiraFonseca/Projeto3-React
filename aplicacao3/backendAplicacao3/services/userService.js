const User = require('../models/User');

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    throw new Error('Erro ao criar usuário');
  }
};

const getUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw new Error('Erro ao buscar usuário');
  }
};

const updateUser = async (userId, updateData) => {
  try {
    const user = await User.findByIdAndUpdate(userId, updateData, { new: true });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  } catch (error) {
    console.error('Erro ao atualizar usuário:', error);
    throw new Error('Erro ao atualizar usuário');
  }
};

const deleteUser = async (userId) => {
  try {
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  } catch (error) {
    console.error('Erro ao deletar usuário:', error);
    throw new Error('Erro ao deletar usuário');
  }
};

const getUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ username });
    if (!user) {
      throw new Error('Usuário não encontrado');
    }
    return user;
  } catch (error) {
    console.error('Erro ao buscar usuário pelo nome:', error);
    throw new Error('Erro ao buscar usuário pelo nome');
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  getUserByUsername,
};
