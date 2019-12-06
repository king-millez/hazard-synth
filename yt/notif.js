const axios = require("axios");
const fs = require("fs");

module.exports =
{
    checkUploads: function(channel)
    {
        if(`channel is in json`)
        {
            const channelUrl = jsonurl;
            if(fetchSite(channelUrl) != channelName.html)
        }
    }
}

const fetchSite = async() =>
{
    const result = await axios.get(channelUrl);
    var uploadsPage = cheerio.load(result.data);
    fs.writeFile(`${channelName}.html`, uploadsPage, function(err)
    {
        if(err) throw err;
    })
    return uploadsPage;
}