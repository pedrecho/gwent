import Card from './card';

export default class WarriorCard extends Card {
    constructor(name, place, img, realm, power, isHero) {
        super(name, place, img);
        this.realm = realm; //color
        this.power.base = power;
        this.power.current = power;
        this.isHero = isHero; //bool
    }
    // baseline(){
    //     this.power.current = this.power.base;
    // }
}