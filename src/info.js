require('dotenv').config()
const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
  host: process.env.DB_host,             // minecraft server ip
  username: process.env.DB_username, // minecraft username
  password: process.env.DB_password,          // minecraft password, comment out if you want to log into online-mode=false servers
  port: process.env.DB_port,                // only set if you need a port that isn't 25565
  version: process.env.DB_version,             // only set if you need a specific version or snapshot (ie: "1.8.9" or "1.16.5"), otherwise it's set automatically
  // auth: 'mojang'              // only set if you need microsoft auth, then set this to 'microsoft'
})

module.exports = bot;