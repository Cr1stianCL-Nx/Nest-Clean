import { Inject, Injectable } from '@nestjs/common';
import { INJECT_TOKEN_POKEMON } from 'src/app/domain/port/pokemon.port';
import { PokemonPort } from '../../domain/port/pokemon.port';

@Injectable()
export class PokemonService {
  constructor(
    @Inject(INJECT_TOKEN_POKEMON)
    private readonly pokemonPort: PokemonPort,
  ) {}

  obtainPokemonById(id: number) {
    return this.pokemonPort.fetchPokemonById(id);
  }
}
