const {
    MessageEmbed
  } = require("discord.js");
  const config = require("../../botconfig/config.json");
  const ee = require("../../botconfig/embed.json");
  const emoji = require(`../../botconfig/emojis.json`);
  module.exports = {
    name: "Beta Tester",
    category: "🔰 Info",
    aliases: [`bt`, `betatest`],
    cooldown: 5,
    usage: "Tester",
    description: "Gives you the list of beta tester",
    run: async (client, message, args, user, text, prefix) => {
      try {
        message.channel.send(new MessageEmbed()
          .setColor(ee.color)
          .setTitle(":heart: Thanks for testing me!")
          .setFooter(ee.footertext, ee.footericon)
          .setDescription(`\`\`\`yml\nName: Welper#0001 [873368320756318229]\nName: Lencheuous#9739 [471270353646256138]\nName: owlnest#5685 [478557854165499904] \`\`\``)
        );
      } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
          .setColor(ee.wrongcolor)
          .setFooter(ee.footertext, ee.footericon)
          .setTitle(`${emoji.msg.ERROR} ERROR | An error occurred`)
          .setDescription(`\`\`\`${e.message}\`\`\``)
        );
      }
    }
  }
