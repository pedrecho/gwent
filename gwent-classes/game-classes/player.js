import Board from "./board";
import CardStack from "./card-stack";

export default class Player {
    constructor(faction, leader, deck) {
        //TODO;
        this.facion = faction;
        this.leader = leader;
        this.deck = deck;
        this.hand = new CardStack();
        this.end = new CardStack();
        this.board = new Board();
    }

}