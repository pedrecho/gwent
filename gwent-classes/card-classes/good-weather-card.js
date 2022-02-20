import SpecialCard from "./special-сard";
import BadWeatherCard from "./bad-weather-card";

export default class GoodWeatherCard extends SpecialCard {
    playCard(player1, player2, place) {
        GoodWeatherCard.action1(player1.board);
        GoodWeatherCard.action1(player2.board);
    }
    static action1(row) { //TODO; придумать что-нибудь лучше action1
        let special = row.special;
        let res = special.indexOf(item => item instanceof BadWeatherCard);
        if(res !== -1)
            special.slice(res, res + 1);
    }
    canPlace() {
        return true;
    }
}