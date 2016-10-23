'use strict';

class HelpMessageProcessor {
    constructor(CONFIG) {
        this.CONFIG = CONFIG;
    }

    process(msg) {
        return "-----------------------------------------------------------------------------\n" +
            "-- Available commands:" + "\n" +
            "-----------------------------------------------------------------------------\n" +
            "-- * !archerism - display a random archer quote\n" +
            "-- * !help - display help information on the commands you can use \n" +
            "-----------------------------------------------------------------------------";
    }
}

module.exports = HelpMessageProcessor;