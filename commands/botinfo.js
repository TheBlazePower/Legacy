const Discord = require("discord.js");
const { version } = require("discord.js");
let os = require('os')
const cpu = process.cpuUsage().system / 1024 / 1024;
const used = process.memoryUsage().heapUsed / 1024 / 1024;

module.exports.run = async (client, message, args) => {
    message.delete()
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle(`${bot.user.username} Information`)
    .setDescription("==========================================")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField(":computer: Information:", `Name:${bot.user.username} \nCreated: Mei/6/2018 \nJoined: April/30/2018`, true)
    .addField(":shield: Owner:", `Discord Name: <@357772791187243008> \nReal Name: Reyhand Martheen \nAge: 15`, true)
    .addField(":pencil: Library:", `Discord.js ${version} \nCoded: Glitch.com \nUsing: Node.Js`, true)
    .addField(":pager: Version:", "Currently: BETA 3.6 \nNext: BETA 3.7", true)
    .addField(":file_folder: CPU Usage:", `${Math.round(cpu * 100) / 100}%`, true)
    .addField(":file_folder: Memory Usage:", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
    .addField("• Users", `${bot.users.size.toLocaleString()}`, true)
    .addField("• Servers", `${bot.guilds.size.toLocaleString()}`, true)
    .addField("• Channels ", `${bot.channels.size.toLocaleString()}`, true)
    .addField("• Arch", `\`${os.arch()}\``,true)
    .addField("• Platform", `\`\`${os.platform()}\`\``,true)
    .addField(":dividers: New Feature:", "========================================== \n|.ping| \n==========================================")
    .setFooter(`${bot.user.username}, Was Currently BETA Mode`);

    message.channel.send(botembed);
}

module.exports.help = {
  name:"botinfo"
}
