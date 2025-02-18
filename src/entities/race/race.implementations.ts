import { RaceInterface, RaceProps } from "./race";


export class Race implements RaceInterface {
    constructor(private readonly props: RaceProps) {

    }

    public static build({ name, attack, defense, health }: RaceProps) {
        const race = new Race({ name, attack, defense, health })
        return race
    }

    getName(): string {
        return this.props.name
    }

    getAttack(): number {
        return this.props.attack
    }

    getDefense(): number {
        return this.props.defense
    }

    getHealth(): number {
        return this.props.health
    }
}