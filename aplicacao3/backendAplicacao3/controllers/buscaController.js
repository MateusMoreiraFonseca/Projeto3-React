const Person = require('../models/Person'); 

const buscarDados = async (req, res) => {
  try {
    const { firstName, lastName, gender, birthdayStart, birthdayEnd, email, phone } = req.query;

    let query = {};

    if (firstName) {
      query.firstName = new RegExp(firstName, 'i');
    }

    if (lastName) {
      query.lastName = new RegExp(lastName, 'i');
    }

    if (gender) {
      query.gender = gender;
    }

    if (birthdayStart || birthdayEnd) {
      query.birthday = {};
      if (birthdayStart) {
        query.birthday.$gte = new Date(birthdayStart);
      }
      if (birthdayEnd) {
        query.birthday.$lte = new Date(birthdayEnd);
      }
    }

    if (email) {
      query.email = new RegExp(email, 'i');
    }

    if (phone) {
      query.phone = new RegExp(phone, 'i');
    }

    const dados = await Person.find(query);

    res.json(dados);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Falha ao buscar dados.' });
  }
};

module.exports = { buscarDados };
