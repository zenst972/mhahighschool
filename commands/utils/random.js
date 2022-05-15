const { MessageEmbed } = require('discord.js')

module.exports = {
  name: 'randomimg',
  description: 'Génère une image aléatoire',
  runSlash: (client, interaction) => {
    let imageLinks = [
      'https://images3.alphacoders.com/859/859804.png',
      'https://images4.alphacoders.com/819/819837.png',
      'https://images5.alphacoders.com/714/714548.png',
      'https://images8.alphacoders.com/937/937839.jpg',
      'https://images.alphacoders.com/937/937823.jpg',
      'https://images8.alphacoders.com/842/842139.png',
      'https://images7.alphacoders.com/922/922244.png',
      'https://images6.alphacoders.com/853/853978.png',
      'https://images4.alphacoders.com/935/935852.jpg',
      'https://images.alphacoders.com/933/933860.jpg'
    ]
    const index = Math.floor(Math.random() * (imageLinks.length - 1) + 1)

    const embed = new MessageEmbed()
      .setTitle('L\'album du lycée')
      .setImage(`${imageLinks[index]}`)
      .setTimestamp()
      .setFooter({ text: interaction.user.username, iconURL: interaction.user.displayAvatarURL() })

    interaction.reply({ embeds: [embed] })
  }
}