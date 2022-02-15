import Board from "./board";
import CardStack from "./card-stack";
import WarriorCard from "../card-classes/warrior-card";

export default class Player {
    constructor(realm, leader, deck) {
        this.realm = realm;
        this.leader = leader;
        this.deck = deck;
        this.deck.shuffle();
        this.hand = new CardStack();
        this.end = new CardStack();
        this.board = new Board();
    }
    receiveHand() {
        for(let i = 0; i < 10; ++i)
            this.hand.addCard(this.deck.giveRandCard());
    }
    changeCard(number) {
        let card = this.deck.giveRandCard();
        this.deck.addCard(this.hand.giveCard(number));
        this.hand.addCard(card);
    }
    putCard(card, place) {
        this.board.putCard(card, place);
    }
    removeCard(number, place) {
        return this.board.removeCard(number, place);
    }
    cardToEnd(card) {
        this.end.addCard(card);
    }
    clearBoard() {
        let cards = this.board.clear();
        cards.forEach(item => {
            if(item instanceof WarriorCard && !item.isHero)
                this.end.addCard(item);
        });
    }
    // goodWeather() {
    //     this.board.goodWeather();
    // }
}