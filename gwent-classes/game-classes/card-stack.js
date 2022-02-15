import SpecialCard from "../card-classes/special-сard";

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
    clear() {
        let cards = this.cards;
        this.cards = [];
        return cards;
    }
    sort() {
        this.cards.sort(function (a, b) {
            if(a instanceof SpecialCard) {
                if (b instanceof SpecialCard) {
                    return 0;
                }
                else {
                    return 1;
                }
            }
            else if (b instanceof  SpecialCard) {
                return -1;
            }
            else {
                return a.power.base - b.power.base;
            }
        });
    }
}