import { Character } from "./entities/character/character.implementations";
import { Race } from "./entities/race/race.implementations";

const wizard = Race.build({ name: "wizard", attack: 25, defense: 2, health: 100 });
const warrior = Race.build({ name: "warrior", attack: 10, defense: 7, health: 120 });

console.log("Raças criadas:");
console.table([
    { name: wizard.getName(), attack: wizard.getAttack(), defense: wizard.getDefense(), health: wizard.getHealth() },
    { name: warrior.getName(), attack: warrior.getAttack(), defense: warrior.getDefense(), health: warrior.getHealth() }
]); // Exibe as raças de forma legível

const player1 = Character.build({ name: "Druidao", age: 50, race: wizard });
const player2 = Character.build({ name: "Escudao", age: 30, race: warrior });

console.log("Players criados:");
console.table([
    { name: player1.getName(), age: player1.getAge(), race: player1.getRace().getName() },
    { name: player2.getName(), age: player2.getAge(), race: player2.getRace().getName() }
]); // Exibe os jogadores de forma legível
