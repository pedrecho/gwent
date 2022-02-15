import SpecialCard from "./special-сard";
import Card from "./card";

function deleteCards(cards) {
    cards.forEach(item => delete(item));
}

export default class ExecutionCard extends SpecialCard {
    playCard(player1, player2) { //удаляет самые сильные карты с поля;
        let res1 = ExecutionCard.action1(player1.board);
    }
    static action1(board) {
        return{
            melee: this.action2(board.melee),
            distant: this.action2(board.distant),
            siege: this.action2(board.siege)
        }
    }
    static action2(row) {
        let warriors = row.warrior;
        let power = 0;
        let cards = []
        for(let i = 0; i < warriors.length; ++i){
            if(warriors[i].power.current > power){
                power = warriors[i].power.current;
                cards = [i];
            }
            else if(warriors[i].power.current === power){
                cards.push(i);
            }
        }
        return {
            power: power,
            cards: cards
        }
    }
}