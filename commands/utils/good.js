const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'good',
  description: 'Dit au revoir ou bonjour au serveur Discord !',
  options: [
    {
      name: 'time',
      description: 'Dire bonjour ou au revoir',
      type: 'STRING',
      required: true,
      choices: [
        {
          name: 'day',
          value: 'day'
        },
        {
          name: 'night',
          value: 'night'
        },
        {
          name: 'eat',
          value: 'eat'
        }
      ]
    }
  ],
  runSlash: (client, interaction) => {
    const timeChoices = interaction.options.getString('time')

    if (timeChoices == 'day') {
      interaction.reply({content: `Bonjour <@${interaction.user.id}> ! ☀️`, ephemereal: true})
    } else if (timeChoices == 'night') {
      interaction.reply({content: `Bonne nuit <@${interaction.user.id}> ! 🌕`, ephemereal: true})
    } else if (timeChoices == 'eat') {
      interaction.reply({content: `Bonne app <@${interaction.user.id}> ! 🍽️`, ephemereal: true})
    }
  }
}