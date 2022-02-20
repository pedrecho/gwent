import WarriorCard from "./warrior-card";

export default class SpyCard extends WarriorCard {
    playCard(player1, player2, place) {
        super.playCard(player2, player1, place);
        player1.moveRandCard(player1.hand, player1.deck);
        player1.moveRandCard(player1.hand, player1.deck);
    }
}