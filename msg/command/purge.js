const prefix = '>'

module.exports =
{
    checkMsg: function(message)
    {
        let args = message.content.substring(prefix.length).split(" ");
        if(message.member.roles.has('468654045100507137') || message.member.roles.has('553737253470601227'))
        {
            if(args[1] > 100 || !args[1])
            {
                return false;   
            }
            else
            {
                return true;
            }
        }
        else
        {
            return "Insufficient permissions, RIP.";
        }
    }
}