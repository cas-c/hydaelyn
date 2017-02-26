const Commando = require('discord.js-commando');
const path = require('path');
const sqlite = require('sqlite');
const auth = require('./auth');

const client = new Commando.Client({
	owner: auth.owner,
	commandPrefix: ''
});

client.setProvider(
	sqlite.open(path.join(__dirname, 'database.sqlite3')).then(db => new Commando.SQLiteProvider(db))
).catch(console.error);

client.registry.registerGroup('math', 'Math').registerDefaults().registerCommandsIn(path.join(__dirname, 'commands'));

client.login(auth.token);
