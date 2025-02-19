import { RaceProps } from "../../entities/race/race";
import { CharacterInFightInterfaces, CharacterInFightProps } from "./characterInFight";

export class CharacterInFight implements CharacterInFightInterfaces {
    health;
    constructor(private readonly props: CharacterInFightProps) {
        this.health = this.props.race.getBaseHealth();
    }

    public static build(character: CharacterInFightProps) {
        const characterInFight = new CharacterInFight(character)
        return characterInFight
    }

    getName() {
        return this.props.name;
    }

    getRace(): RaceProps {
        return {
            name: this.props.race.getName(),
            attack: this.props.race.getAttack(),
            defense: this.props.race.getDefense(),
            baseHealth: this.props.race.getBaseHealth(),
        }
    }

    getHealth() {
        return this.health;
    }

    takeDamage(damage: number) {
        const injury = damage - this.props.race.getDefense()
        if (injury < 0) {
            return
        }
        this.health - injury
        return
    }

    isAlive() {
        return this.health > 0;
    }

}