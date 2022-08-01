

const note = require('express').Router();

note.get('/', (req, res) =>
res.sendFile(path.join(__dirname, 'public/index.html'))
);

module.exports = note