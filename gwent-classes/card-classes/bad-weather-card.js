import SpecialCard from "./special-сard";

export default class BadWeatherCard extends SpecialCard {
    constructor(place, type) {
        super(place, type);
    }
    action(warriors) {
        warriors.forEach(item => item.power.current = 1)
    }
}