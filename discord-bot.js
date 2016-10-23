"use strict";

const Discord = require("discord.js");
const fs = require('fs');
const BotMessageExtensions = require('./src/message/decorator/MessageExtensionsDecorator');
const ArcherismMessageProcessor = require('./src/message/processor/ArcherismMessageProcessor');

const bot = new Discord.Client();

const CONFIG = JSON.parse(fs.readFileSync('archerisms.static.json', 'utf8'));

bot.on("message", msg => {
    // console.log(msg);
    
    const message = new BotMessageExtensions().decorate(msg);
    
    // make sure the message wasn't from a bot
    if(message.author.bot != true) {
        const date = new Date();
        const filename = '' + date.getYear() + '-' + date.getMonth() + '-' + date.getDate() + '-' + date.getHours() + '-' + date.getMinutes() + '-' + date.getSeconds() + '-' + date.getMilliseconds();
        fs.writeFile('log/' + filename + '.json', JSON.stringify(message, null, 4), (err) => {
            if (err) throw err;
        });

        switch(message.messageType) {
            case "ARCHERISM":
                message.channel.sendMessage(new ArcherismMessageProcessor(CONFIG).process(message));
            default:
                // do nothing
        }
    }
    return true;
});

bot.on('ready', () => {
    console.log('----------- Danger zone! -----------');
});

bot.login("MjM5NDcxNDIwNDcwNTkxNDk4.Cu1hug.3c3gp_TA0LOEM7wZLoa_ZG9CMFM");