const axios = require('axios');
const cheerio = require('cheerio')
const fs = require('fs');

module.exports =
{
    getNum: function()
    {
        var day;
        axios.get("https://www.youtube.com/playlist?list=PLu5ySPYsErT0rt8jotkjCG4cmBedT2dIG").then((response) =>
        {
            if(response.status === 200)
            {
                const site = response.data;
                const $ = cheerio.load(site);
            }
            day = $(this).find('span').text().trim();
        }, (error) => console.log(error));
        return day;
    }
}