// Ripped mostly straight from the discord.js-commando example, it's for testing
const Commando = require('discord.js-commando');
const { oneLine } = require('common-tags');

module.exports = class AddNumbersCommand extends Commando.Command {
	constructor(client) {
		super(client, {
			name: 'add-numbers',
			aliases: ['add', 'add-nums'],
			group: 'math',
			memberName: 'add',
			description: 'Adds numbers together.',
			details: oneLine`
				Adds numbers together.
				We're just checking if the bot works.
			`,
			examples: ['add 420 69'],
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
		const total = args.numbers.reduce((prev, arg) => prev + parseFloat(arg), 0);
		return msg.reply(`**Sum:** ${total}`);
	}
}
