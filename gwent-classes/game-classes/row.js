import WarriorStack from "./warrior-stack";
import SpecialStack from "./special-stack";

export default class Row {
    constructor() {
        //TODO;
        this.warrior = new WarriorStack();
        this.special = new SpecialStack();
    }
    power() {
        //TODO;

    }
    goodWeather() {
        this.special.goodWeather();
    }
}