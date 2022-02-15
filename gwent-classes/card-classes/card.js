export default class Card {
    constructor(name, place, img) {
        this.name = name;
        this.img = img;
        this.place = place;
    }
    canPlace(slot) {
        return this.place === slot;
    }
    playCard(player1, player2) {} //TODO; player1 - доска сыгравшего карту
}