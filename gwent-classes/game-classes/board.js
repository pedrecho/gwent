import Row from './row';

export default class Board {
    constructor() {
        this.melee = new Row();
        this.distant = new Row();
        this.siege = new Row();
    }
    power() {
        return this.melee.power() + this.distant.power() + this.siege.power();
    }
    goodWeather() {
        this.melee.goodWeather();
        this.distant.goodWeather();
        this.siege.goodWeather();
    }
}