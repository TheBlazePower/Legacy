const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send(":warning: Please Tag User To Use This Command, ```Usage: .kick <@user> <reason>```");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(":warning: Error: you don't have permissions to kick! You need KICK_MEMBERS Permission");
    if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be kicked!");

    let kickEmbed = new Discord.RichEmbed()
    .setTitle(`${bot.user.username} Attention :warning:`)
    .setDescription("==========================================")
    .setColor("#e56b00")
    .addField("Kicked User", `${kUser}`, true)
    .addField("Kicked By", `<@${message.author.id}>`, true)
    .addField("Reason", kReason, true)
    .setFooter(`${bot.user.username}, Was Currently BETA Mode`);

    let kickChannel = message.guild.channels.find(`name`, "mod-log");
    if(!kickChannel) return message.channel.send("Can't find mod-log channel.");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
    message.channel.send(`${message.author} **You Have Successfuly Kicked** ${kUser}`);
}

module.exports.help = {
  name:"kick"
}
