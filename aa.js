const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`وسيط مضمون نايم`,"http://twitch.tv/وسيط مضمون نايم")
client.user.setStatus("dnd")
});

client.login('NTk1NzIwODQ0NDIwOTcyNTYz.XRvNug.WapCJKQEaTOphoL8ObtYe30Az6k');// لا تغير فيها شيء