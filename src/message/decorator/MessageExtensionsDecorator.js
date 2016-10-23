'use strict';

const fs = require('fs');

class MessageExtensionsDecorator {
    constructor(CONFIG) {
        this.CONFIG = JSON.parse(fs.readFileSync('archerisms.static.json', 'utf8'));;
    }
    
    decorate(msg) {
        msg.messageType = this.messageType(msg);
        return msg;
    }

    messageType(msg) {
        for (var m in this.CONFIG.triggers) {
            const phrase = this.CONFIG.phrases[m];
            if (msg.content.includes(phrase.trigger)) {
                return "ARCHERISM";
            }
        }
    }
}

module.exports = MessageExtensionsDecorator;