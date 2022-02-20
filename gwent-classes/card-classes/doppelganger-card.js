import WarriorCard from "./warrior-card";

export default class DoppelgangerCard extends WarriorCard {
    playCard(player1, player2, place) {
        super.playCard(player1, player2, place);
        for (let i = 0; i < player1.deck.length; ++i) {
            if (player1.deck[i] instanceof DoppelgangerCard && player1.deck[i].type === this) {
                let card = player1.deck.giveCard(i);
                card.playCard(player1, player2, place);
            }
        }
        for (let i = 0; i < player1.hand.length; ++i) {
            if (player1.hand[i] instanceof DoppelgangerCard && player1.hand[i].type === this) {
                let card = player1.hand.giveCard(i);
                card.playCard(player1, player2, place);
            }
        }
    }
}