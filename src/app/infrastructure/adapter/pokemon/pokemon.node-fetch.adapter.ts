import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import fetch from 'node-fetch';

import { PokemonPort } from '../../../domain/port/pokemon.port';
import { ApiConfigService } from 'src/app/application/config/api-config.service';
import { PokemonResponse } from 'src/app/domain/models/pokemon-adapter.model';

@Injectable()
export class PokemonNodeFetchAdapter implements PokemonPort {
  constructor(private config: ApiConfigService) {}

  fetchPokemonById(id: number): Observable<PokemonResponse> {
    const uri = this.config.getPokemonEndPoint;
    const response = fetch(`${uri}/${id}`)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson as PokemonResponse;
      });
    return from(response);
  }
}
