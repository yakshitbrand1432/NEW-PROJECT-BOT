const fs = require("fs");
module.exports.config = {
	name: "Piyush yt",
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
     react.includes("PIYUSH") || react.includes("piyush yt") || react.includes("tricker yt link") ||
react.includes("tricker") ||
react.includes("yt link")) {
		var msg = {
				body: `【 ᯽ 𝐋𝐎 𝐌𝐄 𝐀𝐀 𝐆𝐘𝐀 𝐏𝐈𝐘𝐔𝐒𝐇 𝐒𝐈𝐑 𝐊𝐀 𝐘𝐓 𝐂𝐇𝐀𝐍𝐍𝐀𝐋 𝐋𝐈𝐍𝐊 𝐋𝐄𝐊𝐄
   【 𝐘𝐓 𝐋𝐈𝐍𝐊 : ̗̀➛ https://youtube.com/@piyush_chauhan447?si=e81SAzZ4tRCekzy- 】
   
   【 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐇𝐄𝐋𝐏 𝐆𝐑𝐎𝐔𝐏 𝐋𝐈𝐍𝐊: ̗̀➛ https://chat.whatsapp.com/FvSKvHB3OQ4ItfouW8c3IY 】
   
   【 𝐏𝐈𝐘𝐔𝐒𝐇 𝐒𝐈𝐑 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐈𝐃 𝐋𝐈𝐍𝐊 : ̗̀➛ https://www.facebook.com/profile.php?id=61559938125497&mibextid=ZbWKwL◎】
   
   【 𝐒𝐮𝐬𝐜𝐫𝐢𝐛𝐞 𝐚𝐧𝐝 𝐣𝐨𝐢𝐧 𝐦𝐲 𝐰𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐠𝐫𝐨𝐮𝐩 𝐭𝐪 𝐠𝐮𝐲𝐬 🥰😍᯽】 `,
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🫡", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
