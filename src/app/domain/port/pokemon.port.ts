import { Observable } from 'rxjs';
import { PokemonResponse } from '../models/pokemon-adapter.model';

export interface PokemonPort {
  fetchPokemonById(id: number): Observable<PokemonResponse>;
}

export const INJECT_TOKEN_POKEMON = 'PokemonPort';
