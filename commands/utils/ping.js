const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'ping',
  description: 'Return the latence of the bot and the Discord API',
  runSlash: (client, interaction) => {
    const embed = new MessageEmbed()
      .setTitle('Pong 🏓')
      .setThumbnail(client.user.displayAvatarURL())
      .addFields(
        { name: 'Latence', value: `${Math.round(client.ws.ping)}ms.`, inline: true },
        { name: 'Uptime', value: `<t:${parseInt(client.readyTimestamp / 1000)}:R>`, inline: true }
      )
      .setTimestamp()
      .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })

    interaction.reply({ embeds: [embed] })
  }
}