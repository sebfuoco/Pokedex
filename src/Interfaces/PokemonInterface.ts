import { Stats } from '../Interfaces/StatInterface.ts'
import { Info } from '../Interfaces/InfoInterface.ts'
import { Evolution } from '../Constants/PokemonEvolutionConstants.ts';
import { types } from '../Constants/TypesConstants.ts';

export interface Pokemon {
    readonly id: number;
    readonly name: string;
    readonly description?: string;
    readonly img: string;
    readonly pokedexImg: string;
    readonly types: types;
    readonly info?: Info;
    readonly stats?: Stats;
    readonly evolutions?: Evolution
}