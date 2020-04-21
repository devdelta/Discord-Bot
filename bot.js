const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = require("./auth.json").token;

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity("Headbanging to hardstyle."); 
});

bot.on('message', msg => {
    if(msg.author.bot){return;}
    var m = msg.content.toLowerCase();

  if (m === 'plz hardstyle') 
  {
    msg.reply("");
  }
  if (m.includes("crille", 0))
  {
    msg.reply("Crille is hot. ;)");
  }
});

bot.login(Token);
