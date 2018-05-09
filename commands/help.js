const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()
    let botembed = new Discord.RichEmbed()
    .setTitle(`${bot.user.username}, Command List`)
    .setDescription("**==========================================**")
    .setColor("#15f153")
    .addField("General:", "**==========================================** \n`.botinfo` \n`.serverinfo` \n`.legacycraft apakah <text>` \n`.help` \n`.ping` \n`.quiz` \n`.report <@user> <reason>` \n`.userinfo <@user>` \n`.weather <city>` \n**==========================================**")
    .addField("Moderator:", "**==========================================** \n`.addrole <@user> <role>` \n`.ban <@user> <reason>` \n`.appeal <reason>` \n`.clear <1-100>` \n`.kick <@user> <reason>` \n`.removerole <@user> <role>` \n`.say <text>` \n`.warn <@user> <reason>` \n`.warnlevel <@user>` \n**==========================================**")
    .setFooter(`${bot.user.username} | Official CutePeople Bot, Was Currently BETA Mode`);

    message.author.send(`Please Wait To Sending Help Page`).then(msg => msg.edit(botembed));

    let embed = new Discord.RichEmbed()
    .setTitle(`**${message.author.tag} Sending Help Page To Your DM :mailbox_with_mail:**`)
    .setColor("#15f153")

    message.channel.send(`Please Wait 5 Second To Sending a Message`).then(msg => msg.edit(embed));

}

module.exports.help = {
  name:"help"
}
