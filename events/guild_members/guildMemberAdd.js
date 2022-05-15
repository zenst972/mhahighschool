const {MessageEmbed} = require('discord.js')

module.exports = {
  name: 'guildMemberAdd',
  once: false,
  async execute(client, member) {

    let welcomeRole = member.guild.roles.cache.find(r => r.id === "975133098989736127")

    const embed = new MessageEmbed()
      .setTitle(`Bienvenue ${member.user.username}`)
      .setDescription(`<@${member.id}> a rejoint le Lycée !`)
      .addField(`Nombre de lycéens`, `${member.guild.memberCount}`, true)
      .addField(`Role`, `${member.roles.highest}`, true)
      .setTimestamp()
      .setFooter({ text: `${client.user.username}`, iconURL: client.user.displayAvatarURL() })

    member.roles.add(welcomeRole).then(() => client.channels.cache.get('975129117911580722').send({ embeds: [embed] }))
  }
}