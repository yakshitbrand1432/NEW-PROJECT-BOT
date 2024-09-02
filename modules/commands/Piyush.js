const fs = require("fs");
module.exports.config = {
	name: "Piyush",
    version: "1.1.1",
	hasPermssion: 0,
	credits: "PIYUSH", 
	description: "Just Respond",
	commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("piyush") ||
     react.includes("PIYUSH") || react.includes("Jay shri sitaram") || react.includes("radhe radhe") ||
react.includes("tricker") ||
react.includes("yt link")) {
		var msg = {
				body: `【 ᯽ 𝐋𝐎 𝐌𝐄 𝐀𝐀 𝐆𝐘𝐀 𝐏𝐈𝐘𝐔𝐒𝐇 𝐒𝐈𝐑 𝐊𝐀 𝐘𝐓 𝐂𝐇𝐀𝐍𝐍𝐀𝐋 𝐋𝐈𝐍𝐊
    𝐘𝐓 𝐋𝐈𝐍𝐊 => https://youtube.com/@piyush_chauhan447?si=e81SAzZ4tRCekzy-
    𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐋𝐈𝐍𝐊 => https://chat.whatsapp.com/FvSKvHB3OQ4ItfouW8c3IY 
    𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐋𝐈𝐍 => https://www.facebook.com/profile.php?id=61559938125497&mibextid=ZbWKwL
    𝐒𝐮𝐬𝐜𝐫𝐢𝐛𝐞 𝐚𝐧𝐝 𝐣𝐨𝐢𝐧 𝐦𝐲 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐠𝐫𝐨𝐮𝐩 ᯽】`,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
