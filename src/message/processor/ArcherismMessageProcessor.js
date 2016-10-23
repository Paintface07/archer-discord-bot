'use strict';

const fs = require('fs');

class ArcherismMessageProcessor {
    constructor(CONFIG) {
        this.CONFIG = JSON.parse(fs.readFileSync('archerisms.static.json', 'utf8'));;
    }
    
    process(msg) {
        var matchingPhrases = [];
        for (var m in this.CONFIG.phrases) {
            const phrase = this.CONFIG.phrases[m];
            if (msg.content.includes(phrase.trigger)) {
                matchingPhrases.push(phrase.text);
            }
        }

        console.log(msg.messageType);
        return matchingPhrases[Math.floor(Math.random() * matchingPhrases.length)];
    }
}

module.exports = ArcherismMessageProcessor;