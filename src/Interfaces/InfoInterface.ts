import { Ability } from '../Interfaces/AbilityInterface.ts'

export interface Info {
    readonly height: string,
    readonly species: string,
    readonly weight: string,
    readonly abilties: readonly Ability[],
    readonly gender: string | readonly [string, string]
}