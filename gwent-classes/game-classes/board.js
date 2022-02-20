import Row from './row';


function defineRow(place) {
    if(place === 'melee')
        return this.melee;
    if(place === 'distant')
        return this.distant;
    if(place === 'siege')
        return this.siege;
}


export default class Board {
    constructor() {
        this.melee = new Row();
        this.distant = new Row();
        this.siege = new Row();
    }
    power() {
        return this.melee.power() + this.distant.power() + this.siege.power();
    }
    // goodWeather() {
    //     this.melee.goodWeather();
    //     this.distant.goodWeather();
    //     this.siege.goodWeather();
    // }
    mostPowerfulCards() {
       let res = [this.melee.mostPowerfulCards(), this.distant.mostPowerfulCards(), this.siege.mostPowerfulCards()];
       let power = 0;
       let cards = [];
       res.forEach(item => {
           if(item.power > power){
               power = item.power;
               cards = item.cards;
           }
           else if(item.power === power){
               cards = cards.concat(item.cards);
           }
       });
    }
    putCard(card, place) {
        defineRow(place).addCard(card);
    }
    removeCard(number, place) {
        return defineRow(place).giveCard(number);
    }
    clear() {
        return this.melee.clear() + this.distant.clear() + this.siege.clear();
    }
}