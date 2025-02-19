import { CharacterTypes, CharacterInterface } from "../../entities/character/character";

type CharacterInFight = CharacterTypes;

export type FightProps = {
    character1: CharacterInterface;
    character2: CharacterInterface;
}

type characterIntentions = "attack" | "defense"

export type fightResult = {
    message: string;
    char1Info: CharacterInFight;
    char2Info: CharacterInFight;
}

export type FightInterfaces = {
    startFight({ char1Intentions, char2Intentions }: { char1Intentions: characterIntentions, char2Intentions: characterIntentions }): fightResult;
}