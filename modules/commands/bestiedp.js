module.exports.config = {
  name: "bestiedp",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PIYUSH CHAUHAN",
  description: "Friends Dp photos",
  commandCategory: "Random-IMG",
  usages: "bestie dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://imgur.com/a/2qjjxP6.jpg","https://imgur.com/a/erUqqGP.jpg","https://i.imgur.com/EASfhma.jpg","https://i.imgur.com/yNk3exJ.jpg","https://i.imgur.com/BdK6B9z.jpg","https://i.imgur.com/V5BqbAY.jpg","https://i.imgur.com/G1Lq3lz.jpg","https://i.imgur.com/YyvzVNj.jpg","https://i.imgur.com/wxwxPdH.jpg","https://i.imgur.com/RyjvCQa.jpg","https://i.imgur.com/zRxQYeE.jpg","https://i.imgur.com/kAQlHXb.jpg","https://i.imgur.com/RfpAG5G.jpg","https://i.imgur.com/SsSN3pq.jpg","https://i.imgur.com/kSfiHkX.jpg","https://i.imgur.com/UFDKTO4.jpg","https://i.imgur.com/atG5oPm.jpg","https://i.imgur.com/uan61PD.jpg","https://imgur.com/a/erUqqGP.jpg","https://imgur.com/a/2qjjxP6.jpg","https://imgur.com/a/erUqqGP.jpg","https://imgur.com/a/erUqqGP.jpg","https://imgur.com/a/2qjjxP6.jpg","https://imgur.com/a/erUqqGP.jpg","https://imgur.com/a/2qjjxP6.jpg"
     ];
     var callback = () => api.sendMessage({body:`💝 Tere jesa yaar kaha 💝`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
