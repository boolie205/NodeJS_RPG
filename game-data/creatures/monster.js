const Creature = require('./creature.js');

class Monster extends Creature {
	constructor(id) {
		super(id);
	}
}

module.exports = Monster;