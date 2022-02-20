export default class Game {
    constructor(first, second) {
        this.first = first;
        this.second = second;
        this.score = [0, 0]; //TODO; доработать систему ведения счёта
        //TODO; порядок хода
    }
    // goodWeather() {
    //     this.first.goodWeather();
    //     this.second.goodWeather();
    // }
    newRound() {
        this.first.clearBoard();
        this.second.clearBoard();
        //TODO; сделать пассивки фракций
    }
    playCard(card) {
        card.playCard();
    }
}