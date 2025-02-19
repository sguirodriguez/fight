import { RaceInterface, RaceProps, RaceTypes } from "./race";


export class Race implements RaceInterface {
    constructor(private readonly props: RaceProps) {
    }

    public static build({ name, attack, defense, baseHealth }: RaceProps) {
        const race = new Race({ name, attack, defense, baseHealth })
        return race
    }

    getName(): RaceTypes {
        return this.props.name
    }

    getAttack(): number {
        return this.props.attack
    }

    getDefense(): number {
        return this.props.defense
    }

    getBaseHealth(): number {
        return this.props.baseHealth
    }
}