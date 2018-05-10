const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("```Please Tag Your self To Appealing | Usage: .appeal <@me> <reason>```");
    let rreason = args.join(" ").slice(22);
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":warning: Error: you don't have permissions to use this command");

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Appealer")
    .setColor("#15f153")
    .addField("Name", `${rUser}`)
    .addField("Reason", rreason);

    let appealchannel = message.guild.channels.find(`name`, "appeal-staff");
    if(!appealchannel) return message.channel.send("Couldn't find reports channel.");


    message.delete().catch(O_o=>{});
    appealchannel.send(reportEmbed);
    message.channel.send(`${message.author} Thank You For Appealing Your Rank To Out Of Staff`)

}

module.exports.help = {
  name: "appeal"
}
