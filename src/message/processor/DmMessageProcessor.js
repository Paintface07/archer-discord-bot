'use strict';
const googleapis = require('googleapis');
const ArcherismMessageProcessor = require('./ArcherismMessageProcessor');

class DmMessageProcessor {
    constructor(CONFIG) {
        this.CONFIG = CONFIG;
        googleapis.discoverAPI('https://www.googleapis.com/discovery/v1/apis/youtube/', function(err, result) {
            if(err) throw err;
            console.log(result.google.youtube);
        });
    }

    process(msg) {
        msg.content = msg.content += '!archerism';      // make this an archerism request so Archer always responds
        return new ArcherismMessageProcessor(this.CONFIG).process(msg);
    }
}

module.exports = DmMessageProcessor;