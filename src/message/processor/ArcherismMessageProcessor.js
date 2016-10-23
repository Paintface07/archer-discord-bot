'use strict';

class ArcherismMessageProcessor {
    constructor(CONFIG) {
        this.CONFIG = CONFIG;
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
        return matchingPhrases.length > 0 ? matchingPhrases[Math.floor(Math.random() * matchingPhrases.length)]
            : console.error('ArcherismMessageProcessor.process() invoked, but trigger not configured.');
    }
}

module.exports = ArcherismMessageProcessor;