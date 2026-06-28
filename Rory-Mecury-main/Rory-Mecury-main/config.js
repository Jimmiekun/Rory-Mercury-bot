const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

// Change following defaultConfig if you are deploying on github actions/github codespaces or replit...Railway users don't need to edit this

const defaultConfig = {
  SESSION_ID: "", // Put your session id here
  ALIVE_IMG: "https://i.pinimg.com/1200x/8b/4a/a0/8b4aa097d84b897c240852825db836e3.jpg",
  ALIVE_MSG: "*Rory Mercury is active. Ready to play? 🪓🖤*", 
  OPENAI_API_KEY: "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",
  GEMINI_API_KEY: "AQ.Ab8RN6K4nbmBjyww7eqWPxJb8bUMfYp7SBF9pHGiFy75WfPRxg", 
  REMOVE_BG_API_KEY: "3MKsHyrfHcE4Tomk7fECFcTe", 
  WEATHER_API_KEY: "93a2004d3ae0f68973705eca65c2b90f", 
  BOT_OWNER: "2348167571656", 
  ownerNumber: ["2348167571656"], 
  AUTO_STATUS_REACT: "true",
  AUTO_STATUS_REPLY: "true",
  AUTO_STATUS_SEEN: "true",
  MODE: "public", 
};

//*******************************************************************************************************************************************************

module.exports = {
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || defaultConfig.AUTO_STATUS_REACT,
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || defaultConfig.AUTO_STATUS_REPLY,
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || defaultConfig.AUTO_STATUS_SEEN,
  SESSION_ID: process.env.SESSION_ID || defaultConfig.SESSION_ID,
  ALIVE_IMG: process.env.ALIVE_IMG || defaultConfig.ALIVE_IMG,
  ALIVE_MSG: process.env.ALIVE_MSG || defaultConfig.ALIVE_MSG,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || defaultConfig.OPENAI_API_KEY,
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || defaultConfig.GEMINI_API_KEY,
  REMOVE_BG_API_KEY: process.env.REMOVE_BG_API_KEY || defaultConfig.REMOVE_BG_API_KEY, 
  WEATHER_API_KEY: process.env.WEATHER_API_KEY || defaultConfig.WEATHER_API_KEY,
  BOT_OWNER: process.env.BOT_OWNER || defaultConfig.BOT_OWNER,
  ownerNumber: process.env.ownerNumber
    ? process.env.ownerNumber.split(",")
    : defaultConfig.ownerNumber,
  AUTO_READ_STATUS: convertToBool(process.env.AUTO_READ_STATUS, defaultConfig.AUTO_READ_STATUS),
  MODE: process.env.MODE || defaultConfig.MODE,
};