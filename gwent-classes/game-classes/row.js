import WarriorStack from "./warrior-stack";
import SpecialStack from "./special-stack";
import WarriorCard from "../card-classes/warrior-card";

export default class Row {
    constructor() {
        this.warrior = new WarriorStack();
        this.special = new SpecialStack();
    }
    power() {
        let power = 0;
        this.warrior.forEach(item => power += item.power.current);
        return power;
    }
    goodWeather() {
        this.special.goodWeather();
    }
    mostPowerfulCards() {
        let power = 0
        let cards = [];
        this.warrior.forEach(item => {
           if(item.power.current > power) {
               power = item.power.current;
               cards = [item];
           }
           else if(item.power.current === power) {
               cards.push(item);
           }
        });
        return {
            power: power,
            cards: cards
        };
    }
    addCard(card) {
        if(card instanceof WarriorCard)
            this.warrior.addCard(card);
        else
            this.special.addCard(card);
    }
    clear() {
        return this.warrior.clear() + this.special.clear();
    }
}