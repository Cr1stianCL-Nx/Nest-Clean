import { Injectable } from '@nestjs/common';
import { from, Observable } from 'rxjs';
import got from 'got';

import { PokemonPort } from '../../../domain/port/pokemon.port';
import { ApiConfigService } from 'src/app/application/config/api-config.service';
import { PokemonResponse } from 'src/app/domain/models/pokemon-adapter.model';

@Injectable()
export class PokemonGotAdapter implements PokemonPort {
  constructor(private config: ApiConfigService) {}

  fetchPokemonById(id: number): Observable<PokemonResponse> {
    const uri = this.config.getPokemonEndPoint;
    const response = got(`${uri}/${id}`).then(res => {
      console.log('res==>', res);
      return res as any;
    });
    return from(response);
  }
}
