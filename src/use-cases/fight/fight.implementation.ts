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
                message: "Ambos defenderam, sem dano algum",
                char1Info: {
                    name: this.props.character1.getName(),
                    age: this.props.character1.getAge(),
                    race: this.props.character1.getRace()
                },
                char2Info: {
                    name: this.props.character2.getName(),
                    age: this.props.character2.getAge(),
                    race: this.props.character2.getRace()
                },
            }
        }

        return {
            message: "teste",
            char1Info: {
                name: this.props.character1.getName(),
                age: this.props.character1.getAge(),
                race: this.props.character1.getRace()
            },
            char2Info: {
                name: this.props.character2.getName(),
                age: this.props.character2.getAge(),
                race: this.props.character2.getRace()
            },
        }
    }

}