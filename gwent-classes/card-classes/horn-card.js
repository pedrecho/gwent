import SpecialCard from "./special-сard";

export default class HornCard extends SpecialCard {
    ability(row) {
        row.warrior.forEach(item => {
            if(!item.isHero)
                item.power.current *= 2;
        });
    }
}