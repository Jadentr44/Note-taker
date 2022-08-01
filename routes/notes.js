const note = require('express').Router();
const {readFromFile,readAndAppend} = require('../helpers/fs')

note.get('/', (req, res) =>{
  console.log("user get notes");
  readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
}
);

note.post('/', (req, res) =>{
  const {title,text} = req.body;
  if(req.body){

    const newTask = {title,text}
    readAndAppend(newTask, './db/db.json');
    res.json(`Tip added successfully 🚀`);
  }else{
    res.error('error in adding tip')
  }
}
);

module.exports = note