const {
	token,
	guild
} = require('./config.json');
const {
	Client,
	Events,
	GatewayIntentBits,
	Partials
} = require('discord.js');
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds
	],
	partials: [
		Partials.Channel
	]
});

client.on(Events.ClientReady, c => {
	c.guilds.cache.get(guild).channels.cache.forEach(channel => {
		if (channel.deletable) channel.delete();
	});
});

client.login(token);