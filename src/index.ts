import { Character } from "./entities/character/character.implementation";
import { Race } from "./entities/race/race.implementation";
import { CharacterInFight } from "./use-cases/characterInFight/characterInFight.implementation";
import { Fight } from "./use-cases/fight/fight.implementation";

const wizard = Race.build({ name: "wizard", attack: 25, defense: 2, baseHealth: 100 });
const warrior = Race.build({ name: "warrior", attack: 10, defense: 7, baseHealth: 120 });

console.log("Raças criadas:");
console.table([
    { name: wizard.getName(), attack: wizard.getAttack(), defense: wizard.getDefense(), health: wizard.getBaseHealth() },
    { name: warrior.getName(), attack: warrior.getAttack(), defense: warrior.getDefense(), health: warrior.getBaseHealth() }
]); // Exibe as raças de forma legível

const character1 = Character.build({ name: "Druidao", age: 50, race: wizard });
const character2 = Character.build({ name: "Escudao", age: 30, race: warrior });

console.log("Players criados:");
console.table([
    { name: character1.getName(), age: character1.getAge(), race: character1.getRace().getName() },
    { name: character2.getName(), age: character2.getAge(), race: character2.getRace().getName() }
]); // Exibe os jogadores de forma legível


const character1InFightStates = CharacterInFight.build({
    name: character1.getName(),
    age: character1.getAge(),
    race: character1.getRace()
})

const character2InFightStates = CharacterInFight.build({
    name: character2.getName(),
    age: character2.getAge(),
    race: character2.getRace()
})

const fight = Fight.build({ character1: character1InFightStates, character2: character2InFightStates })

const round1 = fight.startFight({ char1Intentions: "attack", char2Intentions: "attack" })
console.log("round1--->", round1)
const round2 = fight.startFight({ char1Intentions: "attack", char2Intentions: "attack" })
console.log("round2--->", round2)


