export default class Card {
    constructor(place) {
        this.place = place;
    }
    canPlace(slot) {
        if(slot == this.place) return true;
        return false;
    }
}