import SpecialCard from "./special-сard";

export default class HornCard extends SpecialCard {
    action(warrior) {
        warrior.forEach(item => {
            if(item.isHero === false)
                item.power.current *= 2;
        });
    }
}