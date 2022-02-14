import WarriorCard from "./warrior-card";

export default class WarriorSpecialCard extends WarriorCard {
    constructor(place, power, isHero) {
        super(place, power, isHero);
    }
    action() {}
}
