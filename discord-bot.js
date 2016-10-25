'use strict';

const Discord = require('discord.js');
const fs = require('fs');
const BotMessageExtensionsDecorator = require('./src/message/decorator/MessageExtensionsDecorator');
const ArcherismMessageProcessor = require('./src/message/processor/ArcherismMessageProcessor');
const DmMessageProcessor = require('./src/message/processor/DmMessageProcessor');

const bot = new Discord.Client();

const CONFIG = JSON.parse(fs.readFileSync('archerisms.static.json', 'utf8'));

const MESSAGE_PROCESSORS = [
    { messageType: 'ARCHERISM', processor: new ArcherismMessageProcessor(CONFIG) },
    { messageType: 'DM', processor: new DmMessageProcessor(CONFIG) }
];

bot.on('message', msg => {
    console.log(msg);
    
    const message = new BotMessageExtensionsDecorator(CONFIG).decorate(msg);
    
    // make sure the message wasn't from a bot
    if(message.author.bot != true) {
        var sendMessage = '';
        for(var p in MESSAGE_PROCESSORS) {
            if(message.messageType === MESSAGE_PROCESSORS[p].messageType) {
                console.log(MESSAGE_PROCESSORS[p]);
                sendMessage = MESSAGE_PROCESSORS[p].processor.process(message);
            }
        }

        message.channel.sendMessage(sendMessage);
    }
    return true;
});

bot.on('ready', () => {
    console.log('----------- Danger zone! -----------');
});

bot.login(CONFIG.serverKey);