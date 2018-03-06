// Output a prompt
const chalk = require('chalk')
const pwd = require('./pwd')
const ls = require('./ls')

const prompt = () => process.stdout.write(chalk.green('\nprompt > '))

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', data => {
  const cmd = data.toString().trim() //remove the newLine
  switch (cmd) {
    case 'pwd':
      pwd()
      break

    case 'ls':
      ls('./')
      break
  }
  prompt()
})
