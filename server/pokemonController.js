const data = require('../data.json');

module.exports = {
  getAllPokemon: (req, res) => {
    res.status(200).send(data);
  },
  getPokemonById: (req, res) => {},
};
