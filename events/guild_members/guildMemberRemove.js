const Discord = require('discord.js')

module.exports = {
  name: 'guildMemberRemove',
  once: false,
  async execute(client, member) {
    const embed = new Discord.MessageEmbed()
      .setTitle(`Adieu ${member.user.username}`)
      .setDescription(`<@${member.id}> a quitté le Lycée !`)
      .setThumbnail(member.user.displayAvatarURL())
      .addField(`Nombre de lycéens`, `${member.guild.memberCount}`, true)
      .setTimestamp()
      .setFooter({ text: client.user.username, iconURL: client.user.displayAvatarURL() })

    client.channels.cache.get('975129151671525457').send({ embeds: [embed] })
  }
}