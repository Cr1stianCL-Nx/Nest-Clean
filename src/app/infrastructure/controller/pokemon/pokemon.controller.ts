import { Controller, Get, Param } from '@nestjs/common';
import { map, Observable } from 'rxjs';
import { PokemonService } from '../../../application/pokemon/pokemon.service';
import { PokemonResponse } from '../../../domain/models/pokemon-adapter.model';

import { GenericResponseDto } from '../../dto/generic-response.dto';
import { Responses } from '../../responses/responses';

@Controller('pokemon')
export class PokemonController {
  constructor(private pokemonService: PokemonService, private res: Responses) {}

  @Get(':id')
  findPokemonById(
    @Param('id') id: number,
  ): Observable<GenericResponseDto<PokemonResponse>> {
    return this.pokemonService.obtainPokemonById(id).pipe(
      map(response => {
        return this.res.buildSuccessResponse(response);
      }),
    );
  }
}
