const note = require('express').Router();
const {readFromFile} = require('../helpers/fs')

note.get('/', (req, res) =>{
  console.log("user get notes");
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
}
);

module.exports = note