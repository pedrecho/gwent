export default class Card {
    constructor(name, place, faction, img) {
        this.name = name;
        this.img = img;
        this.place = place;
    }
    canPlace(slot) {
        return this.place === slot;
    }
}