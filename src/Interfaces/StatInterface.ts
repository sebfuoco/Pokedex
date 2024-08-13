interface Stat {
    readonly base: number,
    readonly min: number,
    readonly max: number,
}

export interface Stats {
    readonly hp : Stat,
    readonly attack : Stat,
    readonly defense : Stat,
    readonly specialAtk : Stat,
    readonly specialDef : Stat,
    readonly speed : Stat
}