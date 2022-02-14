export default class CardStack {
    constructor() {
        this.cards = new Array();
    }
    show() {
        return this.cards;
    }
    shuffle() {
        this.cards.sort(() => Math.random() - 0.5);
    }
    giveRandCard() {
        return this.cards.pop();
    }
    giveCard(number) {
        return this.cards[number];
    }
    addCard(item) {
        this.cards.push(item)
    }
}