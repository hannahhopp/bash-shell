const chalk = require('chalk')
const prompt = () => process.stdout.write(chalk.green('\nprompt > '))

module.exports = prompt;
