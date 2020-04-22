const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = require("./auth.json").token;

bot.on('ready', () => {
   console.log(`Logged in as ${bot.user.tag}!`);
   bot.user.setPresence({ activity: { name: 'with discord.js' }});
});

bot.on('message', msg => {
    if(msg.author.bot){return;}
    var m = msg.content.toLowerCase();

  if (m === 'plz hardstyle') 
  {
    msg.reply("");
  }
  if (m.includes("good bot", 0))
  {
    msg.reply(":D");
  }
  else if (m.includes("bad bot", 0))
  {
    msg.reply(";-;");
  }
});

bot.login(Token);
