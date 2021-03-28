const Discord = require('discord.js')
const ReadLine = require('readline-sync')
const Config = require('./config/keys')

const name = ReadLine.question('What is your name?')

const webhook = new Discord.WebhookClient(Config.DiscordId, Config.DiscordToken)

webhook.send(name)
