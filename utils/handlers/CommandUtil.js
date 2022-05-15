const { promisify } = require('util')
const { glob } = require('glob')
const pGlob = promisify(glob)

module.exports = async client => {
  (await pGlob(`${process.cwd()}/commands/*/*.js`)).map(async (commandFile) => {
    const command = require(commandFile)

    if (!command.name || !command.description) return console.log(`-----\n Command not triggered: No name/No description\nFile -> ${commandFile}\n-----`)

    client.commands.set(command.name, command)
    console.log(`Commande chargée: ${command.name}`)
  })
}

