const request = require('request');
const prompt = require('./prompt')

const curl = url => {
  request(url, (err, response, body) => {
    if (err) throw err;
    process.stdout.write(response + body);
    prompt();
  })
}

module.exports = curl

