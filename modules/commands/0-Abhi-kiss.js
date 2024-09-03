const fs = require("fs");
module.exports.config = {
	name: "imoge5",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "ABHISHEK ", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("Cumma") ||
     react.includes("😘") || react.includes("umma") || react.includes("umha") ||
react.includes("💋") ||
react.includes("kiss")) {
		var msg = {
				body: `【 UMMMMA__😘😘😘😘😘😘 】`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
