const { Client } = require('discord.js');
const { config } = require('dotenv');
const fs = require('fs'); 

const prefix = '>';
const help = require(__dirname + "/msg/command/help.js");
const memes = require(__dirname + "/msg/response/memes.js");

//Function for loging text with a timestamp instead of using "console.log()"
function botLog(input)
{   
    let date_ob = new Date();
    var mth = date_ob.getMonth() + 1;
    var output = date_ob.getFullYear().toString().substr(-2) + ":" + mth + ":"  + date_ob.getDate() + " - " +  date_ob.getHours() + ":" +  date_ob.getMinutes() + ":" + date_ob.getSeconds() + "> " + input;
    console.log(output);
    fs.appendFile('bot.log', `${output}\n`, function(err)
    {
        if(err) throw err;
    });
}

const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
});

client.login(process.env.TOKEN);

client.on("ready", () => {
    botLog(`Bot has logged in as ${client.user.username}`);

    const gameType = "PLAYING";
    client.user.setPresence({
        game: {
            type: gameType,
            name: "Half-Life: Alyx"
        }
    })
    botLog(`Set custom bot status to ${gameType.charAt(0) + gameType.toLowerCase().substr(-(gameType.length - 1))} ${client.user.presence.game.name}`);
});

client.on("message", async message => {
    var uMsg = message.content.toUpperCase();
    botLog(`${message.guild.name}, #${message.channel.name}> [${message.author.username}]: \"${message.content}\"`);

    if(message.content.includes(`${prefix}help`) && message.author.id != "554085858970566666")
    {
        message.channel.send(help.checkCmd(message));
    }

    var memed = memes.checkMsg(message);
    if(memed != null)
    {
        message.channel.send(memed);
    }
});