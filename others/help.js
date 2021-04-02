const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://media.discordapp.net/attachments/815252825012568085/815266512414703656/image0.png `)
    .setTitle(`**Calli Help**`)
    .setDescription(`

**User Commands**
\`a!invite\` - \`a!support\` - \`a!about\`
\`a!ping\` - \`a!prefix\` - \`a!uptime\`

**Music Commands**
\`a!play\` - \`a!skip\` - \`a!skipto\`
\`a!stop\` - \`a!volume\` - \`a!nowplaying\`
\`a!shuffle\` - \`a!search\` - \`a!resume\`
\`a!remove\` - \`a!queue\` - \`a!filter\`
\`a!loop\` - \`a!lyrics\` - \`a!radio\`

**Links**
[Support](https://discord.gg/PqBjHq8Nk9) - [Invite](https://discord.com/api/oauth2/authorize?client_id=728368917487026228&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("YELLOW");
   message.react("<:emoji_74:815251307635015731>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
