const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()
    let then = Date.now()
    let embed = new Discord.RichEmbed()
    .setTitle("Ping-Pong!")
    .addField(":ping_pong: Pong!", `${Date.now() - message.createdTimestamp}ms`, true)
    .addField(":desktop: API", `${bot.ping}Ms`, true)
    .setFooter(`Ping Of ${message.author.tag}`)

    message.channel.send(embed);

}

module.exports.help = {
  name:"ping"
}
