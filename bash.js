// Output a prompt
const pwd = require('./pwd')
const ls = require('./ls')
const cat = require('./cat')
const prompt = require('./prompt')

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const [cmd, ...args] = data
    .toString()
    .trim()
    .split(' ') //remove the newLine
  switch (cmd) {
    case 'pwd':
      pwd()
      break

    case 'ls':
      ls('./')
      break

    case 'cat':
      cat(args)
      break
  }
  prompt()
})
