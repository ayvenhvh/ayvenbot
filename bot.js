const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '=vlastnik') {
    	message.reply('Můj vlastník je Ayven, neboli Patrik Bialý.');
  	}
});

client.on('message', message => {
    if (message.content === '=stfu') {
    	message('Měli by jste být zticha, moderátoři už jsou naštvaný.');
  	}
});


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
