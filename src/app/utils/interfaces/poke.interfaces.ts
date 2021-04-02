export interface IPokemon {
  name: string;
  front_default: string;
}

export interface IPokeUrl {
  name: string;
  url: string;
}

export interface IPokeInfo {
  name: string;
  sprites: any;
}

export interface IPokemonListResult {
  name: string;
  results: IPokeUrl[];
}
