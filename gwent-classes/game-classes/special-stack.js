import CardStack from "./card-stack";

export default class SpecialStack extends CardStack {
    constructor() {
        super();
    }
    addCard(item) {
        if(!this.cards.includes(item)) super.addCard(item)
    }
    goodWeather() {
        //TODO;
        let number = this.cards.indexOf(item => item.type === 'Weather');
        if(number != -1)
            this.cards.splice(number, 1);
    }
}