const { Client, Collection } = require('discord.js')
const dotenv = require('dotenv'); dotenv.config()

const client = new Client({ intents: 515 })
client.commands = new Collection()

let utilsName = ['CommandUtil', 'EventUtil']
utilsName.forEach((handler) => {
  require(`./utils/handlers/${handler}`)(client)
});

process.on('exit', (code) => {console.log(`The process stopped with the code -> ${code}`)})
process.on('uncaughtException', (error, origin) => {console.log(`UNCAUGHT_EXCEPTION: ${error}`, `Origine: ${origin}`)})
process.on('unhandledRejection', (reason, promise) => {console.log(`UNHANDLED_REJECTION: ${reason}\n-----\n`, promise)})
process.on('warning', (...args) => console.log(...args))

client.login(process.env.DISCORD_TOKEN);