import Card from './card';

export default class WarriorCard extends Card {
    constructor(name, place, img, faction, power, isHero) {
        super(name, place, img);
        this.faction = faction; //color
        this.power.base = power;
        this.power.current = power;
        this.isHero = isHero;
    }
    baseline(){
        this.power.current = this.power.base;
    }
}