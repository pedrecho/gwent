import Card from './card';

export default class WarriorCard extends Card {
    constructor(place, power, isHero) {
        super(place);
        this.power.base = power;
        this.power.current = power;
        this.isHero = isHero;
    }
    baseline(){
        this.power.current = this.power.base;
    }
}