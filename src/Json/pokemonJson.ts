import * as Type from '../Constants/TypesConstants.ts'
import * as PokemonName from '../Constants/PokemonNameConstants.ts'
import * as Species from '../Constants/SpeciesConstants.ts'
import * as Ability from '../Constants/AbilityConstants.ts'
import * as Gender from '../Constants/GenderConstants.ts'
import * as Evolution from '../Constants/PokemonEvolutionConstants.ts'
import { Pokemon } from '../Interfaces/PokemonInterface.ts'

const pokedex : string = `pokedex`;
const pokemon : string = `pokemon`;
const imagePath : string = `../images/0/1.png`;

const addImagePath = (name : string, path : string) => imagePath.replace('0', path).replace('1', name);

interface PokemonJson {
    readonly pokemons: Pokemon[];
}

const evolutions = [1, 2, 3];

const pokemonJson : PokemonJson = {
    pokemons: [
    {
        id: 1,
        name: PokemonName.Bulbasaur,
        description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
        img: addImagePath(PokemonName.Bulbasaur, pokedex), 
        pokedexImg: addImagePath(PokemonName.Bulbasaur, pokemon),
        types: [Type.Grass, Type.Poison],
        info: {
            height: '0.7m',
            species: Species.Seed,
            weight: '6.7kg',
            abilties: [Ability.Overgrow, Ability.Chlorophyll],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 45,
                min: 200,
                max: 294,
            },
            attack: {
                base: 49,
                min: 92,
                max: 216,
            },
            defense: {
                base: 49,
                min: 92,
                max: 216,
            },
            specialAtk: {
                base: 65,
                min: 121,
                max: 251,
            },
            specialDef: {
                base: 65,
                min: 121,
                max: 251,
            },
            speed: {
                base: 45,
                min: 85,
                max: 207,
            },
        },
        evolutions: Evolution.Bulbasaur
    },
    {
        id: 2,
        name: PokemonName.Ivysaur,
        description: 'When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.',
        img: addImagePath(PokemonName.Ivysaur, pokedex),
        pokedexImg: addImagePath(PokemonName.Ivysaur, pokemon),
        types: [Type.Grass, Type.Poison],
        info: {
            height: '1m',
            species: Species.Seed,
            weight: '13kg',
            abilties: [Ability.Overgrow, Ability.Chlorophyll],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 60,
                min: 230,
                max: 324,
            },
            attack: {
                base: 62,
                min: 116,
                max: 245,
            },
            defense: {
                base: 63,
                min: 117,
                max: 247,
            },
            specialAtk: {
                base: 80,
                min: 148,
                max: 284,
            },
            specialDef: {
                base: 80,
                min: 148,
                max: 284,
            },
            speed: {
                base: 60,
                min: 112,
                max: 240,
            },
        },
        evolutions: Evolution.Bulbasaur
    },
    {
        id: 3,
        name: PokemonName.Venusaur,
        description: 'Its plant blooms when it is absorbing solar energy. It stays on the move to seek sunlight.',
        img: addImagePath(PokemonName.Venusaur, pokedex),
        pokedexImg: addImagePath(PokemonName.Venusaur, pokemon),
        types: [Type.Grass, Type.Poison],
        info: {
            height: '2m',
            species: Species.Seed,
            weight: '100kg',
            abilties: [Ability.Overgrow, Ability.Chlorophyll],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 80,
                min: 270,
                max: 364,
            },
            attack: {
                base: 82,
                min: 152,
                max: 289,
            },
            defense: {
                base: 83,
                min: 153,
                max: 291,
            },
            specialAtk: {
                base: 100,
                min: 184,
                max: 328,
            },
            specialDef: {
                base: 100,
                min: 184,
                max: 328,
            },
            speed: {
                base: 80,
                min: 148,
                max: 284,
            },
        },
        evolutions: Evolution.Bulbasaur
    },
    {
        id: 4,
        name: PokemonName.Charmander,
        description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        img: addImagePath(PokemonName.Charmander, pokedex),
        pokedexImg: addImagePath(PokemonName.Charmander, pokemon),
        types: [Type.Fire],
        info: {
            height: '0.6m',
            species: Species.Lizard,
            weight: '8.5kg',
            abilties: [Ability.Blaze, Ability.SolarPower],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 39,
                min: 188,
                max: 282,
            },
            attack: {
                base: 52,
                min: 98,
                max: 223,
            },
            defense: {
                base: 43,
                min: 81,
                max: 203,
            },
            specialAtk: {
                base: 60,
                min: 112,
                max: 240,
            },
            specialDef: {
                base: 50,
                min: 94,
                max: 218,
            },
            speed: {
                base: 65,
                min: 121,
                max: 251,
            },
        },
        evolutions: Evolution.Charmander
    },
    {
        id: 5,
        name: PokemonName.Charmeleon,
        description: 'It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.',
        img: addImagePath(PokemonName.Charmeleon, pokedex),
        pokedexImg: addImagePath(PokemonName.Charmeleon, pokemon),
        types: [Type.Fire],
        info: {
            height: '1.1m',
            species: Species.Flame,
            weight: '19kg',
            abilties: [Ability.Blaze, Ability.SolarPower],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 58,
                min: 226,
                max: 320,
            },
            attack: {
                base: 64,
                min: 119,
                max: 249,
            },
            defense: {
                base: 58,
                min: 108,
                max: 236,
            },
            specialAtk: {
                base: 80,
                min: 148,
                max: 284,
            },
            specialDef: {
                base: 65,
                min: 121,
                max: 251,
            },
            speed: {
                base: 80,
                min: 148,
                max: 284,
            },
        },
        evolutions: Evolution.Charmander
    },
    {
        id: 6,
        name: PokemonName.Charizard,
        description: 'It is said that Charizard’s fire burns hotter if it has experienced harsh battles.',
        img: addImagePath(PokemonName.Charizard, pokedex),
        pokedexImg: addImagePath(PokemonName.Charizard, pokemon),
        types: [Type.Fire, Type.Flying],
        info: {
            height: '1.7m',
            species: Species.Flame,
            weight: '90.5kg',
            abilties: [Ability.Blaze, Ability.SolarPower],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 78,
                min: 266,
                max: 360,
            },
            attack: {
                base: 84,
                min: 155,
                max: 293,
            },
            defense: {
                base: 78,
                min: 144,
                max: 280,
            },
            specialAtk: {
                base: 109,
                min: 200,
                max: 348,
            },
            specialDef: {
                base: 85,
                min: 157,
                max: 295,
            },
            speed: {
                base: 100,
                min: 184,
                max: 328,
            },
        },
        evolutions: Evolution.Charmander
    },
    {
        id: 7,
        name: PokemonName.Squirtle,
        description: 'It shelters itself in its shell, then strikes back with spouts of water at every opportunity.',
        img: addImagePath(PokemonName.Squirtle, pokedex),
        pokedexImg: addImagePath(PokemonName.Squirtle, pokemon),
        types: [Type.Water],
        info: {
            height: '0.5m',
            species: Species.TinyTurtle,
            weight: '9kg',
            abilties: [Ability.Torrent, Ability.RainDish],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 44,
                min: 198,
                max: 292,
            },
            attack: {
                base: 48,
                min: 90,
                max: 214,
            },
            defense: {
                base: 65,
                min: 121,
                max: 251,
            },
            specialAtk: {
                base: 50,
                min: 94,
                max: 218,
            },
            specialDef: {
                base: 64,
                min: 119,
                max: 249,
            },
            speed: {
                base: 43,
                min: 81,
                max: 203,
            },
        },
        evolutions: Evolution.Squirtle
    },
    {
        id: 8,
        name: PokemonName.Wartortle,
        description: 'It is said to live 10,000 years. Its furry tail is popular as a symbol of longevity.',
        img: addImagePath(PokemonName.Wartortle, pokedex),
        pokedexImg: addImagePath(PokemonName.Wartortle, pokemon),
        types: [Type.Water],
        info: {
            height: '1m',
            species: Species.Turtle,
            weight: '22.5kg',
            abilties: [Ability.Torrent, Ability.RainDish],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 59,
                min: 228,
                max: 322,
            },
            attack: {
                base: 63,
                min: 117,
                max: 247,
            },
            defense: {
                base: 80,
                min: 148,
                max: 284,
            },
            specialAtk: {
                base: 65,
                min: 121,
                max: 251,
            },
            specialDef: {
                base: 80,
                min: 148,
                max: 284,
            },
            speed: {
                base: 58,
                min: 108,
                max: 236,
            },
        },
        evolutions: Evolution.Squirtle
    },
    {
        id: 9,
        name: PokemonName.Blastoise,
        description: 'The jets of water it spouts from the rocket cannons on its shell can punch through thick steel.',
        img: addImagePath(PokemonName.Blastoise, pokedex),
        pokedexImg: addImagePath(PokemonName.Blastoise, pokemon),
        types: [Type.Water],
        info: {
            height: '1.6m',
            species: Species.Shellfish,
            weight: '85.5kg',
            abilties: [Ability.Torrent, Ability.RainDish],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 79,
                min: 268,
                max: 362,
            },
            attack: {
                base: 83,
                min: 153,
                max: 291,
            },
            defense: {
                base: 100,
                min: 184,
                max: 328,
            },
            specialAtk: {
                base: 85,
                min: 157,
                max: 295,
            },
            specialDef: {
                base: 105,
                min: 193,
                max: 339,
            },
            speed: {
                base: 78,
                min: 144,
                max: 290,
            },
        },
        evolutions: Evolution.Squirtle
    },
    {
        id: 10,
        name: PokemonName.Caterpie,
        description: "It releases a stench from its red antenna to repel enemies. It grows by molting repeatedly.",
        img: addImagePath(PokemonName.Caterpie, pokedex),
        pokedexImg: addImagePath(PokemonName.Caterpie, pokemon),
        types: [Type.Bug],
        info: {
            height: '0.3m',
            species: Species.Worm,
            weight: '2.9kg',
            abilties: [Ability.ShieldDust, Ability.RunAway],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 45,
                min: 200,
                max: 294,
            },
            attack: {
                base: 30,
                min: 58,
                max: 174,
            },
            defense: {
                base: 35,
                min: 67,
                max: 185,
            },
            specialAtk: {
                base: 20,
                min: 40,
                max: 152,
            },
            specialDef: {
                base: 20,
                min: 40,
                max: 152,
            },
            speed: {
                base: 45,
                min: 85,
                max: 207,
            },
        },
        evolutions: Evolution.Caterpie
    },
    {
        id: 11,
        name: PokemonName.Metapod,
        description: 'A steel-hard shell protects its tender body. It quietly endures hardships while awaiting evolution.',
        img: addImagePath(PokemonName.Metapod, pokedex),
        pokedexImg: addImagePath(PokemonName.Metapod, pokemon),
        types: [Type.Bug],
        info: {
            height: '0.7m',
            species: Species.Cocoon,
            weight: '9.9kg',
            abilties: [Ability.ShedSkin],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 50,
                min: 210,
                max: 304,
            },
            attack: {
                base: 20,
                min: 40,
                max: 152,
            },
            defense: {
                base: 55,
                min: 103,
                max: 229,
            },
            specialAtk: {
                base: 25,
                min: 49,
                max: 163,
            },
            specialDef: {
                base: 25,
                min: 49,
                max: 163,
            },
            speed: {
                base: 30,
                min: 58,
                max: 174,
            },
        },
        evolutions: Evolution.Caterpie
    },
    {
        id: 12,
        name: PokemonName.Butterfree,
        description: 'It loves the honey of flowers and can locate flower patches that have even tiny amounts of pollen.',
        img: addImagePath(PokemonName.Butterfree, pokedex),
        pokedexImg: addImagePath(PokemonName.Butterfree, pokemon),
        types: [Type.Bug, Type.Flying],
        info: {
            height: '1.1m',
            species: Species.Butterfly,
            weight: '32kg',
            abilties: [Ability.CompoundEyes, Ability.TintedLens],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 60,
                min: 230,
                max: 324,
            },
            attack: {
                base: 45,
                min: 85,
                max: 207,
            },
            defense: {
                base: 50,
                min: 94,
                max: 218,
            },
            specialAtk: {
                base: 90,
                min: 166,
                max: 306,
            },
            specialDef: {
                base: 80,
                min: 148,
                max: 284,
            },
            speed: {
                base: 70,
                min: 130,
                max: 262,
            },
        },
        evolutions: Evolution.Caterpie
    },
    {
        id: 13,
        name: PokemonName.Weedle,
        description: "It eats its weight in leaves every day. It fends off attackers with the needle on its head.",
        img: addImagePath(PokemonName.Weedle, pokedex),
        pokedexImg: addImagePath(PokemonName.Weedle, pokemon),
        types: [Type.Bug, Type.Poison],
        info: {
            height: '0.3m',
            species: Species.HairyBug,
            weight: '3.2kg',
            abilties: [Ability.ShieldDust, Ability.RunAway],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 40,
                min: 190,
                max: 284,
            },
            attack: {
                base: 35,
                min: 67,
                max: 185,
            },
            defense: {
                base: 30,
                min: 58,
                max: 174,
            },
            specialAtk: {
                base: 20,
                min: 40,
                max: 152,
            },
            specialDef: {
                base: 20,
                min: 40,
                max: 152,
            },
            speed: {
                base: 50,
                min: 94,
                max: 218,
            },
        },
        evolutions: Evolution.Weedle
    },
    {
        id: 14,
        name: PokemonName.Kakuna,
        description: "While awaiting evolution, it hides from predators under leaves and in nooks of branches.",
        img: addImagePath(PokemonName.Kakuna, pokedex), 
        pokedexImg: addImagePath(PokemonName.Kakuna, pokemon),
        types: [Type.Bug, Type.Poison],
        info: {
            height: '0.6m',
            species: Species.Cocoon,
            weight: '10kg',
            abilties: [Ability.ShedSkin],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 45,
                min: 200,
                max: 294,
            },
            attack: {
                base: 25,
                min: 49,
                max: 163,
            },
            defense: {
                base: 50,
                min: 94,
                max: 218,
            },
            specialAtk: {
                base: 25,
                min: 49,
                max: 163,
            },
            specialDef: {
                base: 25,
                min: 49,
                max: 163,
            },
            speed: {
                base: 35,
                min: 67,
                max: 185,
            },
        },
        evolutions: Evolution.Weedle
    },
    {
        id: 15,
        name: PokemonName.Beedrill,
        description: "Its best attack involves flying around at high speed, striking with poison needles, then flying off.",
        img: addImagePath(PokemonName.Beedrill, pokedex), 
        pokedexImg: addImagePath(PokemonName.Beedrill, pokemon),
        types: [Type.Bug, Type.Poison],
        info: {
            height: '1m',
            species: Species.PoisonBee,
            weight: '29.5kg',
            abilties: [Ability.Swarm, Ability.Sniper],
            gender: Gender.BothGenders
        },
        stats: {
            hp: {
                base: 65,
                min: 240,
                max: 334,
            },
            attack: {
                base: 90,
                min: 166,
                max: 306,
            },
            defense: {
                base: 40,
                min: 76,
                max: 196,
            },
            specialAtk: {
                base: 45,
                min: 85,
                max: 207,
            },
            specialDef: {
                base: 80,
                min: 148,
                max: 284,
            },
            speed: {
                base: 75,
                min: 139,
                max: 273,
            },
        },
        evolutions: Evolution.Weedle
    },
    {
        id: 16,
        name: PokemonName.Pidgey,
        img: addImagePath(PokemonName.Pidgey, pokedex), 
        pokedexImg: addImagePath(PokemonName.Pidgey, pokemon),
        types: [Type.Normal, Type.Flying]
    },
    {
        id: 17,
        name: PokemonName.Pidgeotto,
        img: addImagePath(PokemonName.Pidgeotto, pokedex), 
        pokedexImg: addImagePath(PokemonName.Pidgeotto, pokemon),
        types: [Type.Normal, Type.Flying]
    },
    {
        id: 18,
        name: PokemonName.Pidgeot,
        img: addImagePath(PokemonName.Pidgeot, pokedex), 
        pokedexImg: addImagePath(PokemonName.Pidgeot, pokemon),
        types: [Type.Normal, Type.Flying]
    },
    {
        id: 19,
        name: PokemonName.Rattata,
        img: addImagePath(PokemonName.Rattata, pokedex), 
        pokedexImg: addImagePath(PokemonName.Rattata, pokemon),
        types: [Type.Normal]
    },
    {
        id: 20,
        name: PokemonName.Raticate,
        img: addImagePath(PokemonName.Raticate, pokedex), 
        pokedexImg: addImagePath(PokemonName.Raticate, pokemon),
        types: [Type.Normal]
    },
    {
        id: 21,
        name: PokemonName.Spearow,
        img: addImagePath(PokemonName.Spearow, pokedex), 
        pokedexImg: addImagePath(PokemonName.Spearow, pokemon),
        types: [Type.Normal, Type.Flying]
    },
    {
        id: 22,
        name: PokemonName.Fearow,
        img: addImagePath(PokemonName.Fearow, pokedex), 
        pokedexImg: addImagePath(PokemonName.Fearow, pokemon),
        types: [Type.Normal, Type.Flying]
    },
    {
        id: 23,
        name: PokemonName.Ekans,
        img: addImagePath(PokemonName.Ekans, pokedex), 
        pokedexImg: addImagePath(PokemonName.Ekans, pokemon),
        types: [Type.Poison]
    },
    {
        id: 24,
        name: PokemonName.Arbok,
        img: addImagePath(PokemonName.Arbok, pokedex), 
        pokedexImg: addImagePath(PokemonName.Arbok, pokemon),
        types: [Type.Poison]
    },    
    {
        id: 25,
        name: PokemonName.Pikachu,
        img: addImagePath(PokemonName.Pikachu, pokedex), 
        pokedexImg: addImagePath(PokemonName.Pikachu, pokemon),
        types: [Type.Electric]
    },
    {
        id: 26,
        name: PokemonName.Raichu,
        img: addImagePath(PokemonName.Raichu, pokedex), 
        pokedexImg: addImagePath(PokemonName.Raichu, pokemon),
        types: [Type.Electric]
    },
    {
        id: 27,
        name: PokemonName.Sandshrew,
        img: addImagePath(PokemonName.Sandshrew, pokedex), 
        pokedexImg: addImagePath(PokemonName.Sandshrew, pokemon),
        types: [Type.Ground]
    },
    {
        id: 28,
        name: PokemonName.Sandslash,
        img: addImagePath(PokemonName.Sandslash, pokedex), 
        pokedexImg: addImagePath(PokemonName.Sandslash, pokemon),
        types: [Type.Ground]
    },
    {
        id: 29,
        name: PokemonName.Nidoran + '\u2640',
        img: addImagePath(PokemonName.Nidoran + '-f', pokedex), 
        pokedexImg: addImagePath(PokemonName.Nidoran + '-f', pokemon),
        types: [Type.Poison]
    },
    {
        id: 30,
        name: PokemonName.Nidorina,
        img: addImagePath(PokemonName.Nidorina, pokedex), 
        pokedexImg: addImagePath(PokemonName.Nidorina, pokemon),
        types: [Type.Poison]
    },
    {
        id: 31,
        name: PokemonName.Nidoqueen,
        img: addImagePath(PokemonName.Nidoqueen, pokedex), 
        pokedexImg: addImagePath(PokemonName.Nidoqueen, pokemon),
        types: [Type.Poison, Type.Ground]
    },
    {
        id: 32,
        name: PokemonName.Nidoran + '\u2642',
        img: addImagePath(PokemonName.Nidoran + '-m', pokedex), 
        pokedexImg: addImagePath(PokemonName.Nidoran + '-m', pokemon),
        types: [Type.Poison]
    },
    {
        id: 33,
        name: PokemonName.Nidorino,
        img: addImagePath(PokemonName.Nidorino, pokedex), 
        pokedexImg: addImagePath(PokemonName.Nidorino, pokemon),
        types: [Type.Poison]
    },
    {
        id: 34,
        name: PokemonName.Nidoking,
        img: addImagePath(PokemonName.Nidoking, pokedex), 
        pokedexImg: addImagePath(PokemonName.Nidoking, pokemon),
        types: [Type.Poison, Type.Ground]
    },
    {
        id: 35,
        name: PokemonName.Clefairy,
        img: addImagePath(PokemonName.Clefairy, pokedex), 
        pokedexImg: addImagePath(PokemonName.Clefairy, pokemon),
        types: [Type.Fairy]
    },
    {
        id: 36,
        name: PokemonName.Clefable,
        img: addImagePath(PokemonName.Clefable, pokedex), 
        pokedexImg: addImagePath(PokemonName.Clefable, pokemon),
        types: [Type.Fairy]
    },
    {
        id: 37,
        name: PokemonName.Vulpix,
        img: addImagePath(PokemonName.Vulpix, pokedex), 
        pokedexImg: addImagePath(PokemonName.Vulpix, pokemon),
        types: [Type.Fire]
    },
    {
        id: 38,
        name: PokemonName.Ninetales,
        img: addImagePath(PokemonName.Ninetales, pokedex), 
        pokedexImg: addImagePath(PokemonName.Ninetales, pokemon),
        types: [Type.Fire]
    },
    {
        id: 39,
        name: PokemonName.Jigglypuff,
        img: addImagePath(PokemonName.Jigglypuff, pokedex), 
        pokedexImg: addImagePath(PokemonName.Jigglypuff, pokemon),
        types: [Type.Normal, Type.Fairy]
    },
    {
        id: 40,
        name: PokemonName.Wigglytuff,
        img: addImagePath(PokemonName.Wigglytuff, pokedex), 
        pokedexImg: addImagePath(PokemonName.Wigglytuff, pokemon),
        types: [Type.Normal, Type.Fairy]
    },
    {
        id: 41,
        name: PokemonName.Zubat,
        img: addImagePath(PokemonName.Zubat, pokedex), 
        pokedexImg: addImagePath(PokemonName.Zubat, pokemon),
        types: [Type.Poison, Type.Flying]
    },
    {
        id: 42,
        name: PokemonName.Golbat,
        img: addImagePath(PokemonName.Golbat, pokedex), 
        pokedexImg: addImagePath(PokemonName.Golbat, pokemon),
        types: [Type.Poison, Type.Flying]
    },
    {
        id: 43,
        name: PokemonName.Oddish,
        img: addImagePath(PokemonName.Oddish, pokedex), 
        pokedexImg: addImagePath(PokemonName.Oddish, pokemon),
        types: [Type.Grass, Type.Poison]
    },
    {
        id: 44,
        name: PokemonName.Gloom,
        img: addImagePath(PokemonName.Gloom, pokedex), 
        pokedexImg: addImagePath(PokemonName.Gloom, pokemon),
        types: [Type.Grass, Type.Poison]
    },
    {
        id: 45,
        name: PokemonName.Vileplume,
        img: addImagePath(PokemonName.Vileplume, pokedex), 
        pokedexImg: addImagePath(PokemonName.Vileplume, pokemon),
        types: [Type.Grass, Type.Poison]
    },
    {
        id: 46,
        name: PokemonName.Paras,
        img: addImagePath(PokemonName.Paras, pokedex), 
        pokedexImg: addImagePath(PokemonName.Paras, pokemon),
        types: [Type.Bug, Type.Grass]
    },
    {
        id: 47,
        name: PokemonName.Parasect,
        img: addImagePath(PokemonName.Parasect, pokedex), 
        pokedexImg: addImagePath(PokemonName.Parasect, pokemon),
        types: [Type.Bug, Type.Grass]
    },
    {
        id: 48,
        name: PokemonName.Venonat,
        img: addImagePath(PokemonName.Venonat, pokedex), 
        pokedexImg: addImagePath(PokemonName.Venonat, pokemon),
        types: [Type.Bug, Type.Poison]
    },
    {
        id: 49,
        name: PokemonName.Venomoth,
        img: addImagePath(PokemonName.Venomoth, pokedex), 
        pokedexImg: addImagePath(PokemonName.Venomoth, pokemon),
        types: [Type.Bug, Type.Poison]
    },
    {
        id: 50,
        name: PokemonName.Diglett,
        img: addImagePath(PokemonName.Diglett, pokedex), 
        pokedexImg: addImagePath(PokemonName.Diglett, pokemon),
        types: [Type.Ground]
    },
    {
        id: 51,
        name: PokemonName.Dugtrio,
        img: addImagePath(PokemonName.Dugtrio, pokedex), 
        pokedexImg: addImagePath(PokemonName.Dugtrio, pokemon),
        types: [Type.Ground]
    },
    {
        id: 52,
        name: PokemonName.Meowth,
        img: addImagePath(PokemonName.Meowth, pokedex), 
        pokedexImg: addImagePath(PokemonName.Meowth, pokemon),
        types: [Type.Normal]
    },
    {
        id: 53,
        name: PokemonName.Persian,
        img: addImagePath(PokemonName.Persian, pokedex), 
        pokedexImg: addImagePath(PokemonName.Persian, pokemon),
        types: [Type.Normal]
    },
    {
        id: 54,
        name: PokemonName.Psyduck,
        img: addImagePath(PokemonName.Psyduck, pokedex), 
        pokedexImg: addImagePath(PokemonName.Psyduck, pokemon),
        types: [Type.Water]
    },
    {
        id: 55,
        name: PokemonName.Golduck,
        img: addImagePath(PokemonName.Golduck, pokedex), 
        pokedexImg: addImagePath(PokemonName.Golduck, pokemon),
        types: [Type.Water]
    },
    {
        id: 56,
        name: PokemonName.Mankey,
        img: addImagePath(PokemonName.Mankey, pokedex), 
        pokedexImg: addImagePath(PokemonName.Mankey, pokemon),
        types: [Type.Fighting]
    },
    {
        id: 57,
        name: PokemonName.Primeape,
        img: addImagePath(PokemonName.Primeape, pokedex), 
        pokedexImg: addImagePath(PokemonName.Primeape, pokemon),
        types: [Type.Fighting]
    },
    {
        id: 58,
        name: PokemonName.Growlithe,
        img: addImagePath(PokemonName.Growlithe, pokedex), 
        pokedexImg: addImagePath(PokemonName.Growlithe, pokemon),
        types: [Type.Fire]
    },
    {
        id: 59,
        name: PokemonName.Arcanine,
        img: addImagePath(PokemonName.Arcanine, pokedex), 
        pokedexImg: addImagePath(PokemonName.Arcanine, pokemon),
        types: [Type.Fire]
    },
    {
        id: 60,
        name: PokemonName.Poliwag,
        img: addImagePath(PokemonName.Poliwag, pokedex), 
        pokedexImg: addImagePath(PokemonName.Poliwag, pokemon),
        types: [Type.Water]
    },
    {
        id: 61,
        name: PokemonName.Poliwhirl,
        img: addImagePath(PokemonName.Poliwhirl, pokedex), 
        pokedexImg: addImagePath(PokemonName.Poliwhirl, pokemon),
        types: [Type.Water]
    },
    {
        id: 62,
        name: PokemonName.Poliwrath,
        img: addImagePath(PokemonName.Poliwrath, pokedex), 
        pokedexImg: addImagePath(PokemonName.Poliwrath, pokemon),
        types: [Type.Water, Type.Fighting]
    },
    {
        id: 63,
        name: PokemonName.Abra,
        img: addImagePath(PokemonName.Abra, pokedex), 
        pokedexImg: addImagePath(PokemonName.Abra, pokemon),
        types: [Type.Psychic]
    },
    {
        id: 64,
        name: PokemonName.Kadabra,
        img: addImagePath(PokemonName.Kadabra, pokedex), 
        pokedexImg: addImagePath(PokemonName.Kadabra, pokemon),
        types: [Type.Psychic]
    },
    {
        id: 65,
        name: PokemonName.Alakazam,
        img: addImagePath(PokemonName.Alakazam, pokedex), 
        pokedexImg: addImagePath(PokemonName.Alakazam, pokemon),
        types: [Type.Psychic]
    },
    {
        id: 66,
        name: PokemonName.Machop,
        img: addImagePath(PokemonName.Machop, pokedex), 
        pokedexImg: addImagePath(PokemonName.Machop, pokemon),
        types: [Type.Fighting]
    },
    {
        id: 67,
        name: PokemonName.Machoke,
        img: addImagePath(PokemonName.Machoke, pokedex), 
        pokedexImg: addImagePath(PokemonName.Machoke, pokemon),
        types: [Type.Fighting]
    },
    {
        id: 68,
        name: PokemonName.Machamp,
        img: addImagePath(PokemonName.Machamp, pokedex), 
        pokedexImg: addImagePath(PokemonName.Machamp, pokemon),
        types: [Type.Fighting]
    },
    {
        id: 69,
        name: PokemonName.Bellsprout,
        img: addImagePath(PokemonName.Bellsprout, pokedex), 
        pokedexImg: addImagePath(PokemonName.Bellsprout, pokemon),
        types: [Type.Grass, Type.Poison]
    },
    {
        id: 70,
        name: PokemonName.Weepinbell,
        img: addImagePath(PokemonName.Weepinbell, pokedex), 
        pokedexImg: addImagePath(PokemonName.Weepinbell, pokemon),
        types: [Type.Grass, Type.Poison]
    },
    {
        id: 71,
        name: PokemonName.Victreebel,
        img: addImagePath(PokemonName.Victreebel, pokedex), 
        pokedexImg: addImagePath(PokemonName.Victreebel, pokemon),
        types: [Type.Grass, Type.Poison]
    },
    {
        id: 72,
        name: PokemonName.Tentacool,
        img: addImagePath(PokemonName.Tentacool, pokedex), 
        pokedexImg: addImagePath(PokemonName.Tentacool, pokemon),
        types: [Type.Water, Type.Poison]
    },
    {
        id: 73,
        name: PokemonName.Tentacruel,
        img: addImagePath(PokemonName.Tentacruel, pokedex), 
        pokedexImg: addImagePath(PokemonName.Tentacruel, pokemon),
        types: [Type.Water, Type.Poison]
    },
    {
        id: 74,
        name: PokemonName.Geodude,
        img: addImagePath(PokemonName.Geodude, pokedex), 
        pokedexImg: addImagePath(PokemonName.Geodude, pokemon),
        types: [Type.Rock, Type.Ground]
    },
    {
        id: 75,
        name: PokemonName.Graveler,
        img: addImagePath(PokemonName.Graveler, pokedex), 
        pokedexImg: addImagePath(PokemonName.Graveler, pokemon),
        types: [Type.Rock, Type.Ground]
    },
    {
        id: 76,
        name: PokemonName.Golem,
        img: addImagePath(PokemonName.Golem, pokedex), 
        pokedexImg: addImagePath(PokemonName.Golem, pokemon),
        types: [Type.Rock, Type.Ground]
    },
    {
        id: 77,
        name: PokemonName.Ponyta,
        img: addImagePath(PokemonName.Ponyta, pokedex), 
        pokedexImg: addImagePath(PokemonName.Ponyta, pokemon),
        types: [Type.Fire]
    },
    {
        id: 78,
        name: PokemonName.Rapidash,
        img: addImagePath(PokemonName.Rapidash, pokedex), 
        pokedexImg: addImagePath(PokemonName.Rapidash, pokemon),
        types: [Type.Fire]
    },
    {
        id: 79,
        name: PokemonName.Slowpoke,
        img: addImagePath(PokemonName.Slowpoke, pokedex), 
        pokedexImg: addImagePath(PokemonName.Slowpoke, pokemon),
        types: [Type.Water, Type.Psychic]
    },
    {
        id: 80,
        name: PokemonName.Slowbro,
        img: addImagePath(PokemonName.Slowbro, pokedex), 
        pokedexImg: addImagePath(PokemonName.Slowbro, pokemon),
        types: [Type.Water, Type.Psychic]
    },
    {
        id: 81,
        name: PokemonName.Magnemite,
        img: addImagePath(PokemonName.Magnemite, pokedex), 
        pokedexImg: addImagePath(PokemonName.Magnemite, pokemon),
        types: [Type.Electric, Type.Steel]
    },
    {
        id: 82,
        name: PokemonName.Magneton,
        img: addImagePath(PokemonName.Magneton, pokedex), 
        pokedexImg: addImagePath(PokemonName.Magneton, pokemon),
        types: [Type.Electric, Type.Steel]
    },
    {
        id: 83,
        name: PokemonName.Farfetchd,
        img: addImagePath(PokemonName.Farfetchd.replace('\'',''), pokedex), 
        pokedexImg: addImagePath(PokemonName.Farfetchd.replace('\'',''), pokemon),
        types: [Type.Normal, Type.Flying]
    },
    {
        id: 84,
        name: PokemonName.Doduo,
        img: addImagePath(PokemonName.Doduo, pokedex), 
        pokedexImg: addImagePath(PokemonName.Doduo, pokemon),
        types: [Type.Normal, Type.Flying]
    },
    {
        id: 85,
        name: PokemonName.Dodrio,
        img: addImagePath(PokemonName.Dodrio, pokedex), 
        pokedexImg: addImagePath(PokemonName.Dodrio, pokemon),
        types: [Type.Normal, Type.Flying]
    },
    {
        id: 86,
        name: PokemonName.Seel,
        img: addImagePath(PokemonName.Seel, pokedex), 
        pokedexImg: addImagePath(PokemonName.Seel, pokemon),
        types: [Type.Water]
    },
    {
        id: 87,
        name: PokemonName.Dewgong,
        img: addImagePath(PokemonName.Dewgong, pokedex), 
        pokedexImg: addImagePath(PokemonName.Dewgong, pokemon),
        types: [Type.Water, Type.Ice]
    },
    {
        id: 88,
        name: PokemonName.Grimer,
        img: addImagePath(PokemonName.Grimer, pokedex), 
        pokedexImg: addImagePath(PokemonName.Grimer, pokemon),
        types: [Type.Poison]
    },
    {
        id: 89,
        name: PokemonName.Muk,
        img: addImagePath(PokemonName.Muk, pokedex), 
        pokedexImg: addImagePath(PokemonName.Muk, pokemon),
        types: [Type.Poison]
    },
    {
        id: 90,
        name: PokemonName.Shellder,
        img: addImagePath(PokemonName.Shellder, pokedex), 
        pokedexImg: addImagePath(PokemonName.Shellder, pokemon),
        types: [Type.Water]
    },
    {
        id: 91,
        name: PokemonName.Cloyster,
        img: addImagePath(PokemonName.Cloyster, pokedex), 
        pokedexImg: addImagePath(PokemonName.Cloyster, pokemon),
        types: [Type.Water, Type.Ice]
    },
    {
        id: 92,
        name: PokemonName.Gastly,
        img: addImagePath(PokemonName.Gastly, pokedex), 
        pokedexImg: addImagePath(PokemonName.Gastly, pokemon),
        types: [Type.Ghost, Type.Poison]
    },
    {
        id: 93,
        name: PokemonName.Haunter,
        img: addImagePath(PokemonName.Haunter, pokedex), 
        pokedexImg: addImagePath(PokemonName.Haunter, pokemon),
        types: [Type.Ghost, Type.Poison]
    },
    {
        id: 94,
        name: PokemonName.Gengar,
        img: addImagePath(PokemonName.Gengar, pokedex), 
        pokedexImg: addImagePath(PokemonName.Gengar, pokemon),
        types: [Type.Ghost, Type.Poison]
    },
    {
        id: 95,
        name: PokemonName.Onix,
        img: addImagePath(PokemonName.Onix, pokedex), 
        pokedexImg: addImagePath(PokemonName.Onix, pokemon),
        types: [Type.Rock, Type.Ground]
    },
    {
        id: 96,
        name: PokemonName.Drowzee,
        img: addImagePath(PokemonName.Drowzee, pokedex), 
        pokedexImg: addImagePath(PokemonName.Drowzee, pokemon),
        types: [Type.Psychic]
    },
    {
        id: 97,
        name: PokemonName.Hypno,
        img: addImagePath(PokemonName.Hypno, pokedex), 
        pokedexImg: addImagePath(PokemonName.Hypno, pokemon),
        types: [Type.Psychic]
    },
    {
        id: 98,
        name: PokemonName.Krabby,
        img: addImagePath(PokemonName.Krabby, pokedex), 
        pokedexImg: addImagePath(PokemonName.Krabby, pokemon),
        types: [Type.Water]
    },
    {
        id: 99,
        name: PokemonName.Kingler,
        img: addImagePath(PokemonName.Kingler, pokedex), 
        pokedexImg: addImagePath(PokemonName.Kingler, pokemon),
        types: [Type.Water]
    },
    {
        id: 100,
        name: PokemonName.Voltorb,
        img: addImagePath(PokemonName.Voltorb, pokedex), 
        pokedexImg: addImagePath(PokemonName.Voltorb, pokemon),
        types: [Type.Electric]
    },
    {
        id: 101,
        name: PokemonName.Electrode,
        img: addImagePath(PokemonName.Electrode, pokedex), 
        pokedexImg: addImagePath(PokemonName.Electrode, pokemon),
        types: [Type.Electric]
    },
    {
        id: 102,
        name: PokemonName.Exeggcute,
        img: addImagePath(PokemonName.Exeggcute, pokedex), 
        pokedexImg: addImagePath(PokemonName.Exeggcute, pokemon),
        types: [Type.Grass, Type.Psychic]
    },
    {
        id: 103,
        name: PokemonName.Exeggutor,
        img: addImagePath(PokemonName.Exeggutor, pokedex), 
        pokedexImg: addImagePath(PokemonName.Exeggutor, pokemon),
        types: [Type.Grass, Type.Psychic]
    },
    {
        id: 104,
        name: PokemonName.Cubone,
        img: addImagePath(PokemonName.Cubone, pokedex), 
        pokedexImg: addImagePath(PokemonName.Cubone, pokemon),
        types: [Type.Ground]
    },
    {
        id: 105,
        name: PokemonName.Marowak,
        img: addImagePath(PokemonName.Marowak, pokedex), 
        pokedexImg: addImagePath(PokemonName.Marowak, pokemon),
        types: [Type.Ground]
    },
    {
        id: 106,
        name: PokemonName.Hitmonlee,
        img: addImagePath(PokemonName.Hitmonlee, pokedex), 
        pokedexImg: addImagePath(PokemonName.Hitmonlee, pokemon),
        types: [Type.Fighting]
    },
    {
        id: 107,
        name: PokemonName.Hitmonchan,
        img: addImagePath(PokemonName.Hitmonchan, pokedex), 
        pokedexImg: addImagePath(PokemonName.Hitmonchan, pokemon),
        types: [Type.Fighting]
    },
    {
        id: 108,
        name: PokemonName.Lickitung,
        img: addImagePath(PokemonName.Lickitung, pokedex), 
        pokedexImg: addImagePath(PokemonName.Lickitung, pokemon),
        types: [Type.Normal]
    },
    {
        id: 109,
        name: PokemonName.Koffing,
        img: addImagePath(PokemonName.Koffing, pokedex), 
        pokedexImg: addImagePath(PokemonName.Koffing, pokemon),
        types: [Type.Poison]
    },
    {
        id: 110,
        name: PokemonName.Weezing,
        img: addImagePath(PokemonName.Weezing, pokedex), 
        pokedexImg: addImagePath(PokemonName.Weezing, pokemon),
        types: [Type.Poison]
    },
    {
        id: 111,
        name: PokemonName.Rhyhorn,
        img: addImagePath(PokemonName.Rhyhorn, pokedex), 
        pokedexImg: addImagePath(PokemonName.Rhyhorn, pokemon),
        types: [Type.Ground, Type.Rock]
    },
    {
        id: 112,
        name: PokemonName.Rhydon,
        img: addImagePath(PokemonName.Rhydon, pokedex), 
        pokedexImg: addImagePath(PokemonName.Rhydon, pokemon),
        types: [Type.Ground, Type.Rock]
    },
    {
        id: 113,
        name: PokemonName.Chansey,
        img: addImagePath(PokemonName.Chansey, pokedex), 
        pokedexImg: addImagePath(PokemonName.Chansey, pokemon),
        types: [Type.Normal]
    },
    {
        id: 114,
        name: PokemonName.Tangela,
        img: addImagePath(PokemonName.Tangela, pokedex), 
        pokedexImg: addImagePath(PokemonName.Tangela, pokemon),
        types: [Type.Grass]
    },
    {
        id: 115,
        name: PokemonName.Kangaskhan,
        img: addImagePath(PokemonName.Kangaskhan, pokedex), 
        pokedexImg: addImagePath(PokemonName.Kangaskhan, pokemon),
        types: [Type.Normal]
    },
    {
        id: 116,
        name: PokemonName.Horsea,
        img: addImagePath(PokemonName.Horsea, pokedex), 
        pokedexImg: addImagePath(PokemonName.Horsea, pokemon),
        types: [Type.Water]
    },
    {
        id: 117,
        name: PokemonName.Seadra,
        img: addImagePath(PokemonName.Seadra, pokedex), 
        pokedexImg: addImagePath(PokemonName.Seadra, pokemon),
        types: [Type.Water]
    },
    {
        id: 118,
        name: PokemonName.Goldeen,
        img: addImagePath(PokemonName.Goldeen, pokedex), 
        pokedexImg: addImagePath(PokemonName.Goldeen, pokemon),
        types: [Type.Water]
    },
    {
        id: 119,
        name: PokemonName.Seaking,
        img: addImagePath(PokemonName.Seaking, pokedex), 
        pokedexImg: addImagePath(PokemonName.Seaking, pokemon),
        types: [Type.Water]
    },
    {
        id: 120,
        name: PokemonName.Staryu,
        img: addImagePath(PokemonName.Staryu, pokedex), 
        pokedexImg: addImagePath(PokemonName.Staryu, pokemon),
        types: [Type.Water]
    },
    {
        id: 121,
        name: PokemonName.Starmie,
        img: addImagePath(PokemonName.Starmie, pokedex), 
        pokedexImg: addImagePath(PokemonName.Starmie, pokemon),
        types: [Type.Water, Type.Psychic]
    },
    {
        id: 122,
        name: PokemonName.MrMime,
        img: addImagePath(PokemonName.MrMime.replace('. ', '-'), pokedex), 
        pokedexImg: addImagePath(PokemonName.MrMime.replace('. ', '-'), pokemon),
        types: [Type.Psychic, Type.Fairy]
    },
    {
        id: 123,
        name: PokemonName.Scyther,
        img: addImagePath(PokemonName.Scyther, pokedex), 
        pokedexImg: addImagePath(PokemonName.Scyther, pokemon),
        types: [Type.Bug, Type.Flying]
    },
    {
        id: 124,
        name: PokemonName.Jynx,
        img: addImagePath(PokemonName.Jynx, pokedex), 
        pokedexImg: addImagePath(PokemonName.Jynx, pokemon),
        types: [Type.Ice, Type.Psychic]
    },
    {
        id: 125,
        name: PokemonName.Electabuzz,
        img: addImagePath(PokemonName.Electabuzz, pokedex), 
        pokedexImg: addImagePath(PokemonName.Electabuzz, pokemon),
        types: [Type.Electric]
    },
    {
        id: 126,
        name: PokemonName.Magmar,
        img: addImagePath(PokemonName.Magmar, pokedex), 
        pokedexImg: addImagePath(PokemonName.Magmar, pokemon),
        types: [Type.Fire]
    },
    {
        id: 127,
        name: PokemonName.Pinsir,
        img: addImagePath(PokemonName.Pinsir, pokedex), 
        pokedexImg: addImagePath(PokemonName.Pinsir, pokemon),
        types: [Type.Bug]
    },
    {
        id: 128,
        name: PokemonName.Tauros,
        img: addImagePath(PokemonName.Tauros, pokedex), 
        pokedexImg: addImagePath(PokemonName.Tauros, pokemon),
        types: [Type.Normal]
    },
    {
        id: 129,
        name: PokemonName.Magikarp,
        img: addImagePath(PokemonName.Magikarp, pokedex), 
        pokedexImg: addImagePath(PokemonName.Magikarp, pokemon),
        types: [Type.Water]
    },
    {
        id: 130,
        name: PokemonName.Gyarados,
        img: addImagePath(PokemonName.Gyarados, pokedex), 
        pokedexImg: addImagePath(PokemonName.Gyarados, pokemon),
        types: [Type.Water, Type.Flying]
    },
    {
        id: 131,
        name: PokemonName.Lapras,
        img: addImagePath(PokemonName.Lapras, pokedex), 
        pokedexImg: addImagePath(PokemonName.Lapras, pokemon),
        types: [Type.Water, Type.Ice]
    },
    {
        id: 132,
        name: PokemonName.Ditto,
        img: addImagePath(PokemonName.Ditto, pokedex), 
        pokedexImg: addImagePath(PokemonName.Ditto, pokemon),
        types: [Type.Normal]
    },
    {
        id: 133,
        name: PokemonName.Eevee,
        img: addImagePath(PokemonName.Eevee, pokedex), 
        pokedexImg: addImagePath(PokemonName.Eevee, pokemon),
        types: [Type.Normal]
    },
    {
        id: 134,
        name: PokemonName.Vaporeon,
        img: addImagePath(PokemonName.Vaporeon, pokedex), 
        pokedexImg: addImagePath(PokemonName.Vaporeon, pokemon),
        types: [Type.Water]
    },
    {
        id: 135,
        name: PokemonName.Jolteon,
        img: addImagePath(PokemonName.Jolteon, pokedex), 
        pokedexImg: addImagePath(PokemonName.Jolteon, pokemon),
        types: [Type.Electric]
    },
    {
        id: 136,
        name: PokemonName.Flareon,
        img: addImagePath(PokemonName.Flareon, pokedex), 
        pokedexImg: addImagePath(PokemonName.Flareon, pokemon),
        types: [Type.Fire]
    },
    {
        id: 137,
        name: PokemonName.Porygon,
        img: addImagePath(PokemonName.Porygon, pokedex), 
        pokedexImg: addImagePath(PokemonName.Porygon, pokemon),
        types: [Type.Normal]
    },
    {
        id: 138,
        name: PokemonName.Omanyte,
        img: addImagePath(PokemonName.Omanyte, pokedex), 
        pokedexImg: addImagePath(PokemonName.Omanyte, pokemon),
        types: [Type.Rock, Type.Water]
    },
    {
        id: 139,
        name: PokemonName.Omastar,
        img: addImagePath(PokemonName.Omastar, pokedex), 
        pokedexImg: addImagePath(PokemonName.Omastar, pokemon),
        types: [Type.Rock, Type.Water]
    },
    {
        id: 140,
        name: PokemonName.Kabuto,
        img: addImagePath(PokemonName.Kabuto, pokedex), 
        pokedexImg: addImagePath(PokemonName.Kabuto, pokemon),
        types: [Type.Rock, Type.Water]
    },
    {
        id: 141,
        name: PokemonName.Kabutops,
        img: addImagePath(PokemonName.Kabutops, pokedex), 
        pokedexImg: addImagePath(PokemonName.Kabutops, pokemon),
        types: [Type.Rock, Type.Water]
    },
    {
        id: 142,
        name: PokemonName.Aerodactyl,
        img: addImagePath(PokemonName.Aerodactyl, pokedex), 
        pokedexImg: addImagePath(PokemonName.Aerodactyl, pokemon),
        types: [Type.Rock, Type.Flying]
    },
    {
        id: 143,
        name: PokemonName.Snorlax,
        img: addImagePath(PokemonName.Snorlax, pokedex), 
        pokedexImg: addImagePath(PokemonName.Snorlax, pokemon),
        types: [Type.Normal]
    },
    {
        id: 144,
        name: PokemonName.Articuno,
        img: addImagePath(PokemonName.Articuno, pokedex), 
        pokedexImg: addImagePath(PokemonName.Articuno, pokemon),
        types: [Type.Ice, Type.Flying]
    },
    {
        id: 145,
        name: PokemonName.Zapdos,
        img: addImagePath(PokemonName.Zapdos, pokedex), 
        pokedexImg: addImagePath(PokemonName.Zapdos, pokemon),
        types: [Type.Electric, Type.Flying]
    },
    {
        id: 146,
        name: PokemonName.Moltres,
        img: addImagePath(PokemonName.Moltres, pokedex), 
        pokedexImg: addImagePath(PokemonName.Moltres, pokemon),
        types: [Type.Fire, Type.Flying]
    },
    {
        id: 147,
        name: PokemonName.Dratini,
        img: addImagePath(PokemonName.Dratini, pokedex), 
        pokedexImg: addImagePath(PokemonName.Dratini, pokemon),
        types: [Type.Dragon]
    },
    {
        id: 148,
        name: PokemonName.Dragonair,
        img: addImagePath(PokemonName.Dragonair, pokedex), 
        pokedexImg: addImagePath(PokemonName.Dragonair, pokemon),
        types: [Type.Dragon]
    },
    {
        id: 149,
        name: PokemonName.Dragonite,
        img: addImagePath(PokemonName.Dragonite, pokedex), 
        pokedexImg: addImagePath(PokemonName.Dragonite, pokemon),
        types: [Type.Dragon, Type.Flying]
    },
    {
        id: 150,
        name: PokemonName.Mewtwo,
        img: addImagePath(PokemonName.Mewtwo, pokedex), 
        pokedexImg: addImagePath(PokemonName.Mewtwo, pokemon),
        types: [Type.Psychic]
    },
    {
        id: 151,
        name: PokemonName.Mew,
        img: addImagePath(PokemonName.Mew, pokedex),
        pokedexImg: addImagePath(PokemonName.Mew, pokemon),
        types: [Type.Psychic]
    }
]};

export default pokemonJson;