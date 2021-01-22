const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();

bot.on("ready", async () => {

    console.log(`${bot.user.username} is wakker!`);

    bot.user.setActivity("Pluimpje Development", {type: "PLAYING"});

});

bot.on("message", async message => {

    if(message.author.bot) return;

    if(message.channel.type === "dm") return;

    var prefix = botConfig.prefix;

    var messageArray = message.content.split(" ");

    var command = messageArray[0];

    var arguments = messageArray.slice(1);

    if( command === `${prefix}serverlog`){

        return message.channel.send("Ik en <@801828642094972950> zullen aan het einde van de dag een server log vrijgeven! Heb geduld a.u.b.");
    }

    const exampleEmbed = new discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Joinen')
	.setAuthor('Pluimpje')
	.setDescription('Hoe join ik?')
	.addFields(
		{ name: 'Joinen:', value: 'Je kan momenteel nog niet joinen helaas.' },
    )
message.channel.send(exampleEmbed);

});

bot.login(process.env.token);