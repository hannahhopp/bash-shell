const fs = require('fs');
const path = require('path');
const prompt = require('./prompt');

const cat = (file) => {
  let fullPath = path.join(process.cwd(), file);
  fs.readFile(fullPath, (err, data) => {
    if (err) throw err;
    process.stdout.write(data.toString());
    prompt();
  })
}

module.exports = cat;
