const Person = require('../models/Person');

// Função para criar uma nova pessoa
const createPerson = async (personData) => {
  try {
    const person = new Person(personData);
    await person.save();
    return person;
  } catch (error) {
    throw new Error('Erro ao criar pessoa: ' + error.message);
  }
};

// Função para obter uma pessoa pelo ID
const getPersonById = async (id) => {
  try {
    const person = await Person.findById(id);
    if (!person) {
      throw new Error('Pessoa não encontrada.');
    }
    return person;
  } catch (error) {
    throw new Error('Erro ao buscar pessoa: ' + error.message);
  }
};

// Função para atualizar uma pessoa pelo ID
const updatePersonById = async (id, updateData) => {
  try {
    const person = await Person.findByIdAndUpdate(id, updateData, { new: true });
    if (!person) {
      throw new Error('Pessoa não encontrada.');
    }
    return person;
  } catch (error) {
    throw new Error('Erro ao atualizar pessoa: ' + error.message);
  }
};

// Função para deletar uma pessoa pelo ID
const deletePersonById = async (id) => {
  try {
    const person = await Person.findByIdAndDelete(id);
    if (!person) {
      throw new Error('Pessoa não encontrada.');
    }
    return person;
  } catch (error) {
    throw new Error('Erro ao deletar pessoa: ' + error.message);
  }
};

// Função para buscar todas as pessoas (ou com filtros)
const getAllPersons = async (filter = {}) => {
  try {
    const persons = await Person.find(filter);
    return persons;
  } catch (error) {
    throw new Error('Erro ao buscar pessoas: ' + error.message);
  }
};

module.exports = {
  createPerson,
  getPersonById,
  updatePersonById,
  deletePersonById,
  getAllPersons,
};
