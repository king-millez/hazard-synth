module.exports =
{
    checkMsg: function(message)
    {
        var uMsg = message.content.toUpperCase();
        if(uMsg.includes('HL') || uMsg.includes('HALF') || uMsg.includes('LIFE') || uMsg.includes('THREE') || uMsg.includes('L3') || uMsg.includes('LIFE 3') || uMsg.includes('VALVE') || uMsg.includes('PORTAL') || uMsg.includes('GORDON'))
        {
            if(message.author.id != "554085858970566666")
            {
                var rnd = Math.round(Math.random() * 10);
                switch(rnd)
                {
                    case 0:
                        return "<:godron:652081020639641621>";
                        
                    case 1:
                        return "<:argh:652082261440856064>";
                        
                    case 2:
                        return "<:theman:652083010316926997>";
                        
                    case 3:
                        return "<:chell:652246052371693588>";
                        
                    case 4:
                        return "~~The cake is a lie~~";
                        
                    case 5:
                        return "<:themanagain:652085302701195264>";
                        
                    case 6:
                        return "<:WHEAT:652086068275052544>";
                        
                    case 7:
                        return "You're gonna need a gun, don't worry, it's unloaded! :gun:";
                        
                    case 8:
                        return "<:nz:652246551099342858>";
                        
                    case 9:
                        return "<:valveGuy:652087988251262986>";
                        
                    case 10:
                        return "<:valveGirl:652087990251683850>";
                }
            }
        }
        else
        {
            switch(uMsg)
            {
                case 'PENIS':
                    return "lol";

                case 'GET ME A GIRLFRIEND':
                    return "I'm sorry Dave, I'm afraid I can't do that.";
            }
            return null;
        }
        console.log(uMsg);
    }
}