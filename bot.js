const Discord = require("discord.js");
const  client = new Discord.Client();
const config = require("./config.json");
const commands = require('./comandos/index.js');

const COMMAND_GROUP = 'general';
this.commands = comandos;

client.on("ready", () => {
   console.log("Estoy listo!");
client.user.setPresence( {
       status: "online",
       game: {
           name: "League of Legends",
           type: "PLAYING"
       }
   });

   client.on("guildMemberAdd", (member) => {
   console.log(`El PODEROSO ${member.user.username} se ha unido a ${member.guild.name}.`);
   var canal = client.channels.get('421749579306762263');
   canal.send(`Saludos ${member.user}, bienvenido al servidor, pasala bien.`);

   });
});
var prefix = config.prefix;

client.on("message", (message) =>
{
 if (!message.content.startsWith(prefix)) return;
 if (message.author.bot) return;

 const args = message.content.slice(prefix.length).trim().split(/ +/g);
 const command = args.shift().toLowerCase();

  if(command === 'ban'){

        let user = message.mentions.users.first();
        let razon = args.slice(1).join(' ');

        if (message.mentions.users.size < 1) return message.reply('Debe mencionar a alguien.').catch(console.error);
        if(!razon) return message.channel.send('Escriba un razón, `>x ban @username [razón]`');
        if (!message.guild.member(user).bannable) return message.reply('No puedo banear al usuario mencionado.');


        message.guild.member(user).ban(razon);
        message.channel.send(`**${user.username}**, fue baneado del servidor, razón: ${razon}.`);

  }

if (command === 'invite'){
  message.delete (2000);{
  const embed = new Discord.RichEmbed()
  .setTitle("Los Invito a mi Servidor.")
  .setColor("#f7640e")
  .setAuthor(message.author.username, message.author.avatarURL);
  message.channel.send({embed});
}

var id = message.channel.id;
message.guild.channels.get(id).createInvite({
    maxAge: 0  //maxAge: 0 significa que el link sera permanente

}).then(invite =>
    message.channel.send("https://discord.gg/BmcaHBc")
);
/*
NOTA: Tambien puede usar maxUse: 1 para el maximo uso del enlace, en vez de maxAge.

*/
}

});

client.login(config.token);
client.login(process.env.TOKEN);
