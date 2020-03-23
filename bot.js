const { spawn } = require('child_process');

const Telegraf = require('telegraf')

const bot = new Telegraf('1141540861:AAG8L5I6PH1ZZK-Q6qw2BLpy9EmhEgYRuho')


bot.command('mkdir', (ctx) => {
    const mkdir = spawn('mkdir', ['folder']);
    return ctx.reply('Папка folder создана')
})

bot.launch()