import { RaceInterface } from "../race/race";

//segue interface segregation: Os clientes não devem ser forçados a depender de interfaces que não utilizam -> CharacterInterface define apenas os métodos necessários 

//segue LISKOV pois ---> Uma subclasse deve poder substituir sua classe base sem interromper o funcionamento do programa.
//exemplo liskov: se você criar uma classe que estenda Character (por exemplo, ElfCharacter ou OrcCharacter),
//ela pode ser usada no lugar de Character sem quebrar o funcionamento, pois todos os métodos necessários são implementados de maneira consistente.

export type CharacterTypes = {
    name: string,
    age: number,
    race: RaceInterface
}

export type CharacterInterface = {
    getName(): string;
    getAge(): number;
    getRace(): RaceInterface
}