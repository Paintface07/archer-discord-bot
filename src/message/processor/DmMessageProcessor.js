'use strict';
const googleapis = require('googleapis');
const ArcherismMessageProcessor = require('./ArcherismMessageProcessor');

class DmMessageProcessor {
    constructor(CONFIG) {
        this.CONFIG = CONFIG;
        // googleapis.discover('youtube').execute(function(err, client) {});
    }

    process(msg) {
        msg.content = msg.content += '!archerism';      // make this an archerism request so Archer always responds
        return new ArcherismMessageProcessor(this.CONFIG).process(msg);
    }
}

module.exports = DmMessageProcessor;