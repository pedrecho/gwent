import SpecialCard from "./special-сard";

export default class GoodWeatherCard extends SpecialCard {
    constructor() {
        //TODO;
        super();
    }
    action(board1, board2) {
        board1.goodWeather();
        board2.goodWeather();
    }
}