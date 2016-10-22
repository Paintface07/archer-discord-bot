"use strict";

var Discord = require("discord.js");
var fs = require('fs');
var bot = new Discord.Client();

var archerisms = JSON.parse(fs.readFileSync('archerisms.static.json', 'utf8'));

bot.on("message", msg => {
    console.log(msg);

    var matchingPhrases = [];
    for(var m in archerisms.phrases) {
        const phrase = archerisms.phrases[m];
        if(msg.content.startsWith(phrase.trigger)) {
            matchingPhrases.push(phrase.text);
        }
    }

    msg.channel.sendMessage(matchingPhrases[Math.floor(Math.random() * matchingPhrases.length)]);
    return;
});

bot.on('ready', () => {
    console.log('----------- Danger zone! -----------');
});

bot.login("MjM5NDcxNDIwNDcwNTkxNDk4.Cu1hug.3c3gp_TA0LOEM7wZLoa_ZG9CMFM");