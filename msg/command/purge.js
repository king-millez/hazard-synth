const prefix = '>'

module.exports =
{
    checkMsg: function(message)
    {
        let args = message.content.substring(prefix.length).split(" ");
        switch(args[0])
        {
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
    }
}
