const fs = require('fs');
const util = require('util');

//function to read the content from file
const readFromFile = util.promisify(fs.readFile);

module.exports = {readFromFile}