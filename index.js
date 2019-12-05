const { Client } = require('discord.js');
const { config } = require('dotenv');
const prefix = '>';

//Function for loging text with a timestamp instead of using "console.log()"
function botLog(input)
{
    let date_ob = new Date();
    console.log(date_ob.getHours() + ":" + date_ob.getMinutes() + ":" + date_ob.getSeconds() + "> " + input);
}

const client = new Client({
    disableEveryone: true
});

config({
    path: __dirname + "/.env"
});

client.login(process.env.TOKEN);

client.on("ready", () => {
    botLog("Bot has logged in...");

    client.user.setPresence({
        game: {
            type: "WATCHING",
            name: "You"
        }
    })
    botLog("Set custom bot status...");
});

client.on("message", async message => {
    var uMsg = message.content.toUpperCase();
    botLog(`${message.guild.name}, #${message.channel.name}> [${message.author.username}]: \"${message.content}\"`);
    let args = message.content.substring(prefix.length).split(" ");

    switch(args[0])
    {
        case 'help':
            if(args[1] == null || args[1] == "1")
            {
                message.channel.send("**>help** - Show this help list.");
                break;
            }
            break;
        
        case 'purge':
            if(message.member.roles.has('468654045100507137') || message.member.roles.has('553737253470601227'))
            {
                if(!args[1]) return message.channel.send('Error, got no number man!');
                message.channel.bulkDelete(args[1]);
                if(args[1] == '1') return botLog(`${message.guild.name}, #${message.channel.name}> Purged ${args[1]} message.`);
                else return botLog(`${message.guild.name}, #${message.channel.name}> Purged ${args[1]} messages.`);
                break;
            }
            else
            {
                message.channel.send("Insufficient permissions, RIP.");
                break;
            }
            break;
    }

    switch(uMsg)
    {
        case 'PENIS':
            message.channel.send("lol");
            break;

        case 'GET ME A GIRLFRIEND':
            message.channel.send("I'm sorry Dave, I'm afraid I can't do that.");
            break;
    }

    if(uMsg.includes('HL') || uMsg.includes('HALF') || uMsg.includes('LIFE') || uMsg.includes('THREE') || uMsg.includes('L3') || uMsg.includes('LIFE 3') || uMsg.includes('VALVE') || uMsg.includes('PORTAL') || uMsg.includes('GORDON'))
    {
        if(message.author.id != "554085858970566666")
        {
            var rnd = Math.round(Math.random() * 10);
            botLog(rnd.toString());
            switch(rnd)
            {
                case 0:
                    message.channel.send(client.emojis.get("652081020639641621").toString());
                    break;
    
                case 1:
                    message.channel.send(client.emojis.get("652082261440856064").toString());
                    break;
    
                case 2:
                    message.channel.send(client.emojis.get("652083010316926997").toString());
                    break;
    
                case 3:
                    message.channel.send("Did someone say Doom 3?");
                    break;
    
                case 4:
                    message.channel.send("~~The cake is a lie~~");
                    break;
    
                case 5:
                    message.channel.send(client.emojis.get("652085302701195264").toString());
                    break;
    
                case 6:
                    message.channel.send(client.emojis.get("652086068275052544").toString());
                    break;
    
                case 7:
                    message.channel.send("You're gonna need a gun, don't worry, it's unloaded!");
                    message.channel.send(":gun:");
                    break;
    
                case 8:
                    message.channel.send("https://www.youtube.com/watch?v=z3RT0p3xufk");
                    break;

                case 9:
                    message.channel.send(client.emojis.get("652087988251262986").toString());
                    break;
                        
                case 10:
                    message.channel.send(client.emojis.get("652087990251683850").toString());
                    break;   
            }
        }
    }
});