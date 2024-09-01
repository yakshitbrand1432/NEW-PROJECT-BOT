const fs = require("fs");
module.exports.config = {
  name: "arif",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ABHI YADAV", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Admin") ||
     react.includes("@Abhi yadav") || react.includes("ABHI") || react.includes("OWNER") ||
react.includes("OWNER") ||
react.includes("ABHI YADAV")) {
    var msg = {
        body: `┏━━━━━┓
  — 𝐀𝐛ʜ̽ɪ͜͡ɪ ː͢» 🩷 🪽                 ✧═══•❁😛❁•═══✧
┗━━━━━┛

देख लो मेरे बॉस अभिषेक यादव जी *★᭄ ཫको सबसे अलग मासूम चेहरा भोली सी सूरत आखों में प्यार दिल में खुमार ♥️  𓆩♡𓆪`,attachment: fs.createReadStream(__dirname + `/noprefix/abhi.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }