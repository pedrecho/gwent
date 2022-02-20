import SpecialCard from "./special-сard";
//не должно бытть ни одной карты этого класса
//все карты наследууются от SpecialCard или WarriorCard
export default class Card {
    constructor(name, place, description, img) {
        this.name = name;
        this.img = img;
        this.place = place; // melee/distant/siege
    }
    canPlace(slot) { //Чтобы отображать доступные слоты
        return this.place === slot;
    }
    playCard(player1, player2, place) {
        let res = player1.board;
        switch (place) {
            case 'melee':
                res = res.melee;
                break;
            case 'distant':
                res = res.distant;
                break;
            case 'siege':
                res = res.siege;
                break;
        }
        if(this instanceof SpecialCard) {
            res.special.addCard(this);
        }
        else {
            res.warrior.addCard(this);
        }
    } //TODO; player1 - доска сыгравшего карту; Вызывается, когда игграют карту; Уже проверено, что карту можно положить на place
    ability(row) {} //Вызывается при каждом пересчёте очков
}