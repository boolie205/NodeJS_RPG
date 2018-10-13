const Creature = require('./creature.js');

class Npc extends Creature {
	constructor(id) {
		super(id);
	}
}

module.exports = Npc;