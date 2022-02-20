import SpecialCard from "./special-сard";

export default class BadWeatherCard extends SpecialCard {
    playCard(player1, player2, place) {
        super.playCard(player1, player2, place);
        super.playCard(player2, player1, place);
        // this.action1(player1.board);
        // this.action1(player2.board);
    }
    ability(row) {
        row.warrior.forEach(item => {
            if(!item.isHero)
                item.power.current = 1;
        });
    }
    // action1(board) {
    //     switch(this.place) {
    //         case 'melee':
    //             this.action2(board.melee);
    //             break;
    //         case 'distant':
    //             this.action2(board.distant);
    //             break;
    //         case 'siege':
    //             this.action2(board.siege);
    //             break;
    //     }
    // }
    // action2(row) {
    //     row.special.add(this);
    // }
}