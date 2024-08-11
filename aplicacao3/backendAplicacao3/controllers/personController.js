const { createPerson, getPersonById, updatePersonById, deletePersonById, getAllPersons } = require('../services/personService');

const createPersonController = async (req, res) => {
  try {
    const newPerson = await createPerson(req.body);
    res.status(201).json(newPerson);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPersonByIdController = async (req, res) => {
  try {
    const person = await getPersonById(req.params.id);
    res.json(person);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

// Os outros métodos podem ser criados de forma similar usando as funções do serviço

module.exports = {
  createPersonController,
  getPersonByIdController,
  // Outras funções do controlador
};
