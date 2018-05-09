const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  //!warn @daeshan <reason>
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply("Please Tag User To Warn Him \n```Usage: .warn @user#1234 spamming```");
  if(wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  message.delete();
  let warnEmbed = new Discord.RichEmbed()
  .setTitle(`${message.guild.name} Attention :warning:`)
  .setDescription("==========================================")
  .setColor("#fc6400")
  .addField("Warned User:", `<@${wUser.id}>`, true)
  .addField("Warned By:", `${message.author}`, true)
  .addField("Warned In:", message.channel, true)
  .addField("Number of Warnings:", warns[wUser.id].warns, true)
  .addField("Reason:", reason, true)
  .setFooter(`${bot.user.username}, Was Currently BETA Mode`);

  let warnchannel = message.guild.channels.find(`name`, "mod-log");
  if(!warnchannel) return message.reply("Couldn't find mod-log channel");

  message.reply(`Thank You For Giving A Warning To <@${wUser.id}>`)
  warnchannel.send(warnEmbed);

}

module.exports.help = {
  name: "warn"
}
