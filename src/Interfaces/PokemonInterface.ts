import { Stats } from '../Interfaces/StatInterface.ts'
import { Info } from '../Interfaces/InfoInterface.ts'

export interface Pokemon {
    readonly id: number;
    readonly name: string;
    readonly description?: string;
    readonly img: string;
    readonly pokedexImg: string;
    readonly types: readonly string[];
    readonly info?: Info;
    readonly stats?: Stats;
    readonly evolutions?: readonly number[];
}