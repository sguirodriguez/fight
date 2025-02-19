import { CharacterInFightInterfaces } from "../characterInFight/characterInFight";
import { FightInterfaces, FightProps, fightResult } from "./fight";


export class Fight implements FightInterfaces {
    constructor(private readonly props: FightProps) {
    }

    public static build({ character1, character2 }: FightProps) {
        const fight = new Fight({ character1, character2 })
        return fight
    }

    startFight({ char1Intentions, char2Intentions }: { char1Intentions: "attack" | "defense"; char2Intentions: "attack" | "defense"; }): fightResult {
        if (char1Intentions === "defense" && char2Intentions === "defense") {
            return {
                message: "<----Ambos defenderam, sem dano algum---->",
                char1Info: this.getCharInfo(this.props.character1),
                char2Info: this.getCharInfo(this.props.character2),
            }
        }
        const char1IsAttacking = Boolean(char1Intentions === "attack")
        const char2IsAttacking = Boolean(char1Intentions === "attack")
        const char1TakeDamage = char2IsAttacking ? this.props.character2.getRace().attack : 0
        const char2TakeDamage = char1IsAttacking ? this.props.character1.getRace().attack : 0

        this.props.character1.takeDamage(char1TakeDamage)
        this.props.character2.takeDamage(char2TakeDamage)

        return {
            message: "<----Personagens lutam---->",
            char1Info: this.getCharInfo(this.props.character1),
            char2Info: this.getCharInfo(this.props.character2),
        }
    }

    getCharInfo(character: CharacterInFightInterfaces) {
        return {
            name: character.getName(),
            attack: character.getRace().attack,
            defense: character.getRace().defense,
            baseHealth: character.getRace().baseHealth,
            health: character.getStatus().health,
            injury: character.getStatus().injury,
        }
    }
}