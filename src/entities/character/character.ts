import { RaceTypes } from "../race/race";

//segue interface segregation
//segue LISKOV

export type CharacterTypes = {
    name: string,
    age: number,
    type: RaceTypes
}

export type CharacterInterface = {
    getName(): string;
    getAge(): number;
    getType(): RaceTypes
}