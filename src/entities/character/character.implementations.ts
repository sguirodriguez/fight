import { RaceInterface } from "../race/race";
import { CharacterInterface, CharacterTypes } from "./character";

export class Character implements CharacterInterface {
    // seguindo Single Responsability, poucas responsabilidades e referentes apenas ao character
    // seguindo aberto e fechado, fechado para modificação, mas permitindo extensão
    constructor(private readonly props: CharacterTypes) {
    }

    public static build({ name, age, race }: CharacterTypes): Character {
        const character = new Character({ name, age, race });

        return character
    }

    getName() {
        return this.props.name
    }
    getAge() {
        return this.props.age
    }
    getRace(): RaceInterface {
        return this.props.race;
    }
}