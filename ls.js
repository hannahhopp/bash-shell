const fs = require('fs')

const ls = aDir => {
  const files = fs.readdirSync('./')
  // console.log('files', files)
  process.stdout.write(files.join('\n'))
  /*   fs.readdir(aDir, 'utf8', (err, files) => {
 *     if (err) throw err
 *
 *     process.stdout.write(files.join('\n'))
 *     process.stdout.write('\nprompt > ')
 *   }) */
}

module.exports = ls
