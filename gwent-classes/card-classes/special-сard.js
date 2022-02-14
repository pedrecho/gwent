import Card from './card.js';

export default class SpecialCard extends Card {
    constructor(place, type) {
        super(place);
        this.type = type;
    }
    action() {}
}