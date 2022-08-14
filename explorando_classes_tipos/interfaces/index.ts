//types 

//interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    excutarRugido(alturaEmDecibes: number): void;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;

}

const animal: IAnimal = {
    nome: 'elefante',
    tipo: 'aquatico',
    excutarRugido: (alturaEmDecibes) => (`${alturaEmDecibes} db`)
}
const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    excutarRugido: function (alturaEmDecibes: number): void {
        throw new Error("Function not implemented.");
    }
}