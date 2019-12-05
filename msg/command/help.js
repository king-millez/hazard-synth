const prefix = '>';

module.exports =
{
    checkCmd: function(message)
    {
        let args = message.content.substring(prefix.length).split(" ");
        switch(args[0])
        {
            case 'help':
                if(args[1] == null || args[1] == "1")
                {
                    return "**>help** - Show this help list.";
                    break;
                }
                break;
        }
    } 
}