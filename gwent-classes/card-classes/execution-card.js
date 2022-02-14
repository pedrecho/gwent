import SpecialCard from "./special-сard";

function deleteCards(cards) {
    cards.forEach(item => delete(item));
}

export default class ExecutionCard extends SpecialCard {
    action(board1, board2) {
        let res1 = board1.mostPowerfulCards();
        let res2 = board2.mostPowerfulCards();
        if(res1.power > res2.power){
            deleteCards(res1.cards);
        }
        else if(res1.power < res2.power){
            deleteCards(res2.cards);
        }
        else {
            deleteCards(res1.cards(res2.cards()));
        }
    }
}