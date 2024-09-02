 const fs = require("fs");
module.exports.config = {
	name: "Piyush",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Piyush", 
	description: "no prefix comand",
	commandCategory: "OWNER",
	usages: "...",
    cooldowns: 100, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("owner") ||
     react.includes("OWNER") || 
react.includes("Owner")) {
		var msg = {
				body: " ★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦𝐏𝐢𝐲𝐮𝐬𝐡 𝐂𝐡𝐚𝐮𝐡𝐚𝐧✦\n\n★★᭄𝐘𝐨𝐮𝐭𝐮𝐛𝐞 𝐋𝐢𝐧𝐤 :\n\n✦ https://youtube.com/@piyush_chauhan447?si=I4zq1guUJ603tmVp ✦ \n𝗝𝗼𝗶𝗻 𝗢𝘂𝗿 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝗚𝗿𝗼𝘂𝗽 \n 𝗞𝗮𝗮𝗹 𝗟𝗼𝗸 😋 https://chat.whatsapp.com/FvSKvHB3OQ4ItfouW8c3IY ",
				attachment: fs.createReadStream(__dirname + `/noprefix/kk1.jpg`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

    }
