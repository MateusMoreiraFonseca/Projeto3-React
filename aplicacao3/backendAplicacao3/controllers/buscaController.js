const axios = require('axios');

const buscarDados = async (req, res) => {
  try {
    const { firstName, lastName, gender, birthdayStart, birthdayEnd, email, phone, quantidade } = req.query;

    const apiUrl = `https://fakerapi.it/api/v1/persons?_quantity=${quantidade}&_gender=${gender || ''}&_birthday_start=${birthdayStart || ''}&_birthday_end=${birthdayEnd || ''}`;

    const response = await axios.get(apiUrl);
    let dados = response.data.data;

    if (firstName) {
      const regex = new RegExp(firstName, 'i');
      dados = dados.filter(person => regex.test(person.firstname));
    }

    if (lastName) {
      const regex = new RegExp(lastName, 'i');
      dados = dados.filter(person => regex.test(person.lastname));
    }

    if (email) {
      const regex = new RegExp(email, 'i');
      dados = dados.filter(person => regex.test(person.email));
    }

    if (phone) {
      const regex = new RegExp(phone, 'i');
      dados = dados.filter(person => regex.test(person.phone));
    }

    
    res.json(dados);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Falha ao buscar dados.' });
  }
};

module.exports = { buscarDados };
