const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
  if(!args[0]) return message.channel.send("no");
  let embed = new Discord.RichEmbed()
  
  .setTitle(":warning: Clearing All Message")
  .addField("Cleared By:", `${message.author}`, true)
  .addField("Cleared Count:", `${args[0]}`, true);
  
  let incidentchannel = message.guild.channels.find(`name`, "mod-log");
  if(!incidentchannel) return message.channel.send("Can't find mod-log channel.");
  
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(message.delete(2000));
  incidentchannel.send(embed);
});

}

module.exports.help = {
  name: "clear"
}
