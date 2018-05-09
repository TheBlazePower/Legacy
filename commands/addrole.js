const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  //!addrole @andrew Dog Person
  message.delete()
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Maaf sobat, kamu tidak bisa melakukan itu");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Tidak Dapat Menemukan User.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Tentukan sebuah peran!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Tidak dapat menemukan peran itu.");

  if(rMember.roles.has(gRole.id)) return message.reply("Mereka tidak memiliki peran itu.");
  await(rMember.addRole(gRole.id));

  try{
    await rMember.send(`Selamat, Anda telah diberi peran ${gRole.name}`)
  }catch(e){
    console.log(e.stack);
    message.channel.send(`Selamat kepada ${rMember.id}, mereka telah diberi peran ${gRole.name}. Kami mencoba untuk DM mereka, tetapi DM mereka terkunci.`)
  }
}

module.exports.help = {
  name: "addrole"
}
