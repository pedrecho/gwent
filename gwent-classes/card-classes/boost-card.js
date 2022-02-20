import WarriorCard from "./warrior-card";

export default class BoostCard extends WarriorCard {
    ability(row) {
        row.warrior.forEach(item => {
            if(item !== this){
                item.power.current += 1;
            }
        });
    }
}