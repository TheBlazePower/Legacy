const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});
const prefix = `.`
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    delete require.cache[require.resolve(`./commands/${f}`)];
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });
});

client.on("ready", async () => {
  console.log(`${client.user.username} Sudah Online CutePeople_#7627`);
  bot.user.setActivity("Type: .help for Help List", {type: "PLAYING"});

});

// 1) ES6 introduces shorter, optional arrow functions
client.on('typingStart', (channel, user) => {
  console.log(`${user.username} is typing in ${channel.name}`);

});

// 1) ES6 introduces shorter, optional arrow functions
client.on('typingStop', (channel, user) => {
  console.log(`${user.username} Just Send A Message In ${channel.name}`);

});

client.on(`guildBanAdd`, (guild, user) => {
  console.log(`${user.username} Has Been Banned`);

  let listchannel = guild.channels.find(`name`, "blacklisted")
  listchannel.send(`${user.username} Has Been Banned From This ${guild.name} **Server**`)

});

client.on(`guildBanRemove`, (guild, user) => {
  console.log(`${user.username} Has Been Unbanned`);

  let listchannel = guild.channels.find(`name`, "blacklisted")
  listchannel.send(`${user.username} Has Been Unbanned From This ${guild.name} **Server**`)

});

client.on("guildMemberAdd", async member => {
  console.log(`${member} Has Joined Server.`);

  var role = member.guild.roles.find(`name`, "Member");

  member.addRole(role)

  let channel = member.guild.channels.find(`name`, "join-left");
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setThumbnail(memberavatar)
      .addField("Name:", `${member}`)
      .addField(`Welcome To Our:`, `${member.guild.name} | **Server**`)
      .addField("Commands:", "**.help For Help Page**")
      .addField("The Server Is Now:", `${member.guild.memberCount}` + " **members**")
      .setFooter(`${bot.user.username}, Was Currently BETA Mode`)
      .setTimestamp();
  channel.send(embed);

});

client.on("guildMemberRemove", async member => {
  console.log(`${member.id} Has Left Server.`);

  let channel = member.guild.channels.find(`name`, "join-left");
  let memberavatar = member.user.avatarURL
      if (!channel) return;
      let embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setThumbnail(memberavatar)
      .addField("Name:", `${member}`)
      .addField(`Lefting Our:`, `${member.guild.name}` + " | **Server**")
      .addField("The Server Is Now:", `${member.guild.memberCount}` + " **members**")
      .setFooter(`${bot.user.username}, Was Currently BETA Mode`)
      .setTimestamp();
  channel.send(embed);

});

client.on("message", async message => {
  if(message.author.bot) return message.author.send("I Can't Send A Message With Your Command In My DM");
  if(message.channel.type === "dm") return;
  let sender = message.author;
  if (!message.content.startsWith(prefix)) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(client,message,args);

  if (message.content === '<@440303006970413057>') {
  message.channel.send('Yes?, What Can I Help You?');
  }

  if (message.content === '<@440303006970413057> how do i use command?') {
  message.channel.send('You Can Type: .help For Help List');
  }

  if (message.content === '<@440303006970413057> how are you?') {
  message.channel.send('Im Good, You?');
  }

  if (message.content === 'im good too') {
  message.channel.send('Nice, So What Do You Want From Me?');
  }

  if (message.content === '<@440303006970413057> well i have something to tell you') {
  message.channel.send('What Is It? Tell Me');
  }

  if (message.content === `<@440303006970413057> who's your owner?`) {
  message.channel.send('<@357772791187243008> Is My Creator And Owner');
  }

  if (message.content === 'oh so that is your creator/owner?') {
  message.channel.send('Yeah She Is');
  }

  if (message.content === '<@440303006970413057> umm.. can i become a staff?') {
  message.channel.send('Hmm... I Dont Know.. Please Tell To <@357772791187243008>');
  }

  if (message.content === '<@440303006970413057> why?') {
  message.channel.send('Because <@357772791187243008> Is The Owner From This Discord Guild');
  }

  if (message.content === '<@440303006970413057> can i get master_pvp roles?') {
  message.channel.send('Of Course.. Only 4 User Can Get That Roles');
  }

  if (message.content === '<@440303006970413057> thank you') {
  message.channel.send(`You're Welcome`);
  }

  if (message.content === '<@440303006970413057> what is NSFW meaning?') {
  message.channel.send('That Means Its Not Safe For Wife, That Only For 18+');
  }

  if (message.content === '<@440303006970413057> shutdown') {
  message.channel.send('i Can`t do That, My System Its From Console');
  }

  if (message.content === '<@440303006970413057> do u know da wae?') {
  message.channel.send('No. What is that?');
  }

  if (message.content === '<@440303006970413057> where you`ve been at?') {
  message.channel.send('Im Online Sir');
  }

  if (message.content === '<@440303006970413057> where you come from?') {
  message.channel.send('Well.. Im A Bot, And Im Not Human, And My System Its From Command Prompt System32');
  }

  if (message.content === '<@440303006970413057> how many in this guild member?') {
  message.channel.send(`Its About | ${message.guild.memberCount} | User In This Guild`);
    
  }
});

client.login(process.env.BOT_TOKEN);
