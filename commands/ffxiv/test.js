// Ripped mostly straight from the discord.js-commando example, it's for testing
const Commando = require('discord.js-commando');
const { oneLine } = require('common-tags');
const quickstart = require('./quickstart');

module.exports = class TestSheetsCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'test',
			aliases: ['test', 'test-nums'],
			group: 'ffxiv',
			memberName: 'test',
			description: 'tests numbers together.',
			details: oneLine`
				Tests numbers together.
				We're just checking if the bot works.
			`,
			examples: ['test 420 69'],
			args: [
				{
					key: 'numbers',
					label: 'number',
					prompt: 'What numbers are we adding? Each message you send will be a single value.',
					type: 'float',
					infinite: true
				}
			]
		})
	}

	async run(msg, args) {
		return quickstart(args);
	}
}
