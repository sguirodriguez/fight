export type RaceTypes = "wizard" | "warrior" | "rogue"

export type RaceProps = {
    name: RaceTypes;
    attack: number;
    defense: number;
    baseHealth: number;
}

export type RaceInterface = {
    getName(): RaceTypes;
    getAttack(): number;
    getDefense(): number;
    getBaseHealth(): number;
}