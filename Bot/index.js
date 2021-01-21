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

    if( command === `${prefix}faq joinen`){
        
        var botEmbed = new discord.RichEmbed()
            .setDescription("FAQ Joinen")
            .setColor("#ffa500")
            .addField("Hoe join ik?", "Je kan momenteel nog **niet** joinen")
            .addField("Met vriendelijke groet", bot.user.username)
    }

});

bot.login(process.env.token);