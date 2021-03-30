export interface IPokemon {
  name: string;
  front_default: string;
}

export interface ITest {
  name: string;
  url: string;
}

export interface IPokeInfo {
  name: string;
  sprites: any;
}

export interface IPokemonListResult {
  name: string;
  results: ITest[];
}
