const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("```Please Tag User To Report Him | Usage: .report <@user> <reason>```");
    let rreason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setTitle(`${message.guild.name} Attention :warning:`)
    .setDescription("==========================================")
    .setColor("#15f153")
    .addField("Reported User", `${rUser}`, true)
    .addField("Reported By", `${message.author}`, true)
    .addField("Channel", message.channel, true)
    .addField("Reason", rreason, true);

    let reportschannel = message.guild.channels.find(`name`, "reports");
    if(!reportschannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);
    message.channel.send(`${message.author} Thank You For Reporting ${rUser} Our Staff Will Respond Him`)

}

module.exports.help = {
  name: "report"
}
