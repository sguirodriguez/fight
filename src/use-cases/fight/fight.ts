import { CharacterInFightInterfaces } from "../characterInFight/characterInFight";

export type FightProps = {
    character1: CharacterInFightInterfaces;
    character2: CharacterInFightInterfaces;
}

type CharacterIntentions = "attack" | "defense"

type CharInfo = {
    name: string;
    attack: number;
    defense: number;
    baseHealth: number;
    health: number;
    injury: number;
}

export type fightResult = {
    message: string;
    char1Info: CharInfo;
    char2Info: CharInfo;
}

export type FightInterfaces = {
    startFight({ char1Intentions, char2Intentions }: { char1Intentions: CharacterIntentions, char2Intentions: CharacterIntentions }): fightResult;
}