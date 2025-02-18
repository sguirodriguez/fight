import { Character } from "./entities/character/character.implementations";

const wizard = Character.build({ name: "Aragorn", age: 87, type: "wizard" });
const name = wizard.getName()
console.log("o que vem", name)