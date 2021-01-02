// import express from 'express'
const express = require('express');
const { getAllPokemon } = require('./pokemonController');
const pokemonController = require('./pokemonController');
const pokeMonCtrl = require('./pokemonController');

// create app server
const app = express();

// use json
app.use(express.json());

// get end point .. can take two paramas (re,res)
// http://localhost:4420/?name=sam
app.get('/', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  console.log(req.body);
  console.log('some one got to /');
  //res.send('great Success');
  res.send('Root Route');
});

// crud - restful api standards
// get - read data
// post - add data

// param setup
// use when you have a primary key that returns a single instance
// has more control on setup rather than a query
app.get('/pokemon-id/:id', (req, res) => {
  console.log(req.params);
  res.status(200).send('some one go to pokemon-id');
});

// mulitiple params
// example ... http://localhost:4420/pokemon-params/91/name
app.get('/pokemon-params/:id/:name', (req, res) => {
  console.log(req.params);
  res.status(200).send('some one go to pokemon-id');
});

// another route with a status and a message
app.get('/pokemon', (req, res) => {
  console.log('some one got to /pokemon-id:id');
  res.status(200).send('Pokemon Route');
});

// send a status
app.get('/notfound', (req, res) => {
  console.log('some one got to /notfound');
  res.sendStatus(404);
});

// using controller file
app.get('/pokemonList', pokeMonCtrl.getAllPokemon);
app.get('/pokemons/:id', pokeMonCtrl.getPokemonById);

// start server
app.listen(4420, () => {
  console.clear();
  console.log('-> App listening on port#4420');
});
