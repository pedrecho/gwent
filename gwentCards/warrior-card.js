import Card from './card';

export default class WarriorCard extends Card {
    constructor(place, power, isHero) {
        super(place);
        this.power = power;
        this.isHero = isHero;
    }
}