import SpecialCard from "./special-сard";

export default class BadWeatherCard extends SpecialCard {
    playCard(player1, player2) {
        BadWeatherCard.action1(player1.board);
        BadWeatherCard.action1(player2.board);
    }
    static action1(board) {
        this.action2(board.melee);
        this.action2(board.distant);
        this.action2(board.siege);
    }
    static action2(row) {
        let warriors = row.warrior;
        warriors.forEach(item => {
            if(item.isHero === false)
                item.power.current = 1;
        });
    }
}