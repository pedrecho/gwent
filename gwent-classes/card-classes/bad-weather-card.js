import SpecialCard from "./special-сard";

export default class BadWeatherCard extends SpecialCard {
    action(warriors) {
        warriors.forEach(item => {
            if(item.isHero === false)
                item.power.current = 1;
        });
    }
}