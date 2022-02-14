export default class Card {
    constructor(place) {
        this.place = place;
    }
    canPlace(slot) {
        return this.place === slot;
    }
}