require("dotenv").config()
const Sefirosbot = require("./app/Sefirosbot")
const { Bot, webhookCallback } = require("grammy")
const express = require("express")

const token = process.env.BOT_TOKEN
const options = {
    polling: true
}

console.log("starting Sefirosbot...")
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

if (token === "production") {
	const app = express()
	app.use(express.json())
	app.use(webhookCallback(bot, "express"))
	
	const PORT = process.env.PORT || 3000
	app.listen(PORT, () => {
		console.log(`Bot listening on port ${PORT}`)
  })
} else {
	main()
}

process.once("SIGINT", () => bot.stop("SIGINT"))
process.once("SIGTERM", () => bot.stop("SIGTERM"))
