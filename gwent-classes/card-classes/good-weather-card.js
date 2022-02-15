import SpecialCard from "./special-сard";

export default class GoodWeatherCard extends SpecialCard {
    playCard(player1, player2) {
        GoodWeatherCard.action(player1.board);
        GoodWeatherCard.action(player2.board);
    }
    static action(row) {
        let warriors = row.warrior;
        warriors.forEach(item => item.power.current = item.power.base);
    }
    canPlace() {
        return true;
    }
}