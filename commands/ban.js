const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send(":warning: Please Tag User To Use This Command, ```Usage: .ban <@user> <reason>```");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(":warning: Error: you don't have permissions to kick! You need BAN_MEMBERS Permission");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be Banned!");

    let banEmbed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} Attention :warning:`)
    .setDescription("==========================================")
    .setColor("#bc0000")
    .addField("Banned User", `${bUser}`, true)
    .addField("Banned By", `${message.author}`, true)
    .addField("Banned In", message.channel, true)
    .addField("Time", message.createdAt,true)
    .addField("Reason", bReason, true)
    .setFooter(`${bot.user.username}, Was Currently BETA Mode`);

    let incidentchannel = message.guild.channels.find(`name`, "mod-log");
    if(!incidentchannel) return message.channel.send("Can't find mod-log channel.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
    message.channel.send(`${message.author} **You Have Successfully Banned** ${bUser}`);
}

module.exports.help = {
  name:"ban"
}
