module.exports = {
  name: 'emit',
  description: 'Emit a selected event',
  options: [
    {
      name: 'event',
      description: 'Choisir un évènement à emettre',
      type: 'STRING',
      required: true,
      choices: [
        {
          name: 'guildMemberAdd',
          value: 'guildMemberAdd'
        },
        {
          name: 'guildMemberRemove',
          value: 'guildMemberRemove'
        }
      ]
    }
  ],
  runSlash: (client, interaction) => {
    const eventChoices = interaction.options.getString('event')

    if (eventChoices == 'guildMemberAdd') {
      client.emit('guildMemberAdd', interaction.member)
      interaction.reply({content: 'Evenement guildMemberAdd émit !', ephemereal: true})
    } else {
      client.emit('guildMemberRemove', interaction.member)
      interaction.reply({content: 'Evenement guildMemberRemove émit !', ephemereal: true})
    }
  }
}