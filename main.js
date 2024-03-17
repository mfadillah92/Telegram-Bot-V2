require("dotenv").config()
const Sefirosbot = require("./app/Sefirosbot")

const token = process.env.BOT_TOKEN
const options = {
    polling: true
}

console.log("starting cuybot...")
const bot = new Sefirosbot(token, options)

const main = () => {
    console.log("checking feature...")
    bot.getHelp()
    bot.getSticker()
    bot.getGreeting()
    bot.getFollow()
    bot.getQuotes()
    bot.getNews()
    bot.getQuake()
    console.log('feature ready!')
}
main()
console.log("Bot is ready now!")
