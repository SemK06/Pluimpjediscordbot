const discord = require("discord.js");
const botConfig = require("./botconfig.json");

const bot = new discord.Client();

bot.on("ready", async () => {

    console.log(`${bot.user.name} is wakker!`);

    bot.user.setActivity("Pluimpje Development", {type: "PLAYING"});

});

bot.login(botConfig.token);