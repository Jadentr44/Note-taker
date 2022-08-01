const note = require('express').Router();

note.get('/', (req, res) =>{
  console.log("user get notes");
  res.json([
    {
        "title":"Test Title",
        "text":"Test text"
    }
]);
}
);

module.exports = note