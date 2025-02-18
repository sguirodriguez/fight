export type RaceTypes = "wizard" | "warrior" | "rogue"

export type RaceProps = {
    name: RaceTypes;
    attack: number;
    defense: number;
    health: number;
}

export type RaceInterface = {
    getName(): string;
    getAttack(): number;
    getDefense(): number;
    getHealth(): number;
}