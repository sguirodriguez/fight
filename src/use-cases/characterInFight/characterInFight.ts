import { CharacterTypes } from "../../entities/character/character";
import { RaceProps } from "../../entities/race/race";

export type CharacterInFightProps = CharacterTypes

export type CharacterInFightInterfaces = {
    getName(): string;
    getRace(): RaceProps;
    getHealth(): number;
    takeDamage(damage: number): void;
    isAlive(): boolean;
}