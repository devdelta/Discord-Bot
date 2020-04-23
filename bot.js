const Discord = require('discord.js');
const bot = new Discord.Client();
const Token = require("./auth.json").token;

bot.on('ready', () => {
   console.log(`Logged in as ${bot.user.tag}!`);
   bot.user.setPresence({ activity: { name: 'Motherland: Fort Salem' }});
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
  if (m =="!date"){
    var t = new Date();
var year = `${t.getFullYear()}`;
var month = `${t.getMonth()+1}`;
var day = `${t.getDate()}`;
if(t.getMonth()+1<10)
{
  month = `0${t.getMonth()+1}`;
}
msg.reply(`${day}/${month}/${year}`);
  }
  if (m.includes("best show?",0))
  {
    msg.reply("Motherland: Fort Salem");
  }
});

bot.login(Token);
