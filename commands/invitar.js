const Discord = require("discord.js");

exports.run = (client, message, args) => {

    message.delete (1000);{
    const embed = new Discord.RichEmbed()
    .setTitle("Invocadores Los Invito al Servidor.")
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
