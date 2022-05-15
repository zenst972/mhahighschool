module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    console.log('The manager is online !')
    client.channels.cache.get("975120295901949972").send("Bot en ligne !")

    let activevar = ["'le super héros transforme les belles paroles en acte au péril de sa vie' Izuku Midoriya", "'les liens du sang ne te définissent pas. Tu peux devenir celui que tu souhaite.' Rei todoroki", "'tu ne seras pas en mesure de reconnaître tes propres faiblesses si tout ce que tu sais faire, c'est prendre les autres de haut.' Katsuki Bakugo", "'quand on veut accomplir quelque choses il faut des conviction. Les faibles qui n'en n'ont pas sont voués l'échec.' Stain"]
    setInterval(() => {
      const i = Math.floor(Math.random() * (activevar.length - 1) + 1)
      client.user.setActivity(`${activevar[i]}`, { type: 'LISTENING' })
    }, 3000)

    const devGuild = await client.guilds.cache.get('974953803025645589')
    devGuild.commands.set(client.commands.map(command => command))
  }
}
