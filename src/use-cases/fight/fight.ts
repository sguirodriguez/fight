import { Character } from "../../entities/character/character.implementations";

export type FightProps = {
    player1: Character;
    player2: Character;
}


export type FightInterfaces = {
    attack(playerOrigin: string, playerReceive: string): string;
    defense(playerOrigin: string, playerReceive: string): string;
}