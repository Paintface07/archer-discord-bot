const Message = require('discord.js').Message;

class MessageExtensionsDecorator {

    constructor(msg) {
        msg.messageType = this.messageType;
        return msg;
    }

    messageType() {
        return 'type';
    }
}

module.exports = MessageExtensionsDecorator;