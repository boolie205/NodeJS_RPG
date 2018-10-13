const Creature = require('./creature.js');

class Player extends Creature {
	constructor(id) {
		super(id);
	}
}

module.exports = Player;