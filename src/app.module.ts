import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_FILTER } from '@nestjs/core';
import { ApiConfigService } from './app/application/config/api-config.service';
import { PokemonService } from './app/application/pokemon/pokemon.service';
import { INJECT_TOKEN_POKEMON } from './app/domain/port/pokemon.port';
import { PokemonGotAdapter } from './app/infrastructure/adapter/pokemon/pokemon.got.adapter';
import { PokemonNodeFetchAdapter } from './app/infrastructure/adapter/pokemon/pokemon.node-fetch.adapter';
import { PokemonController } from './app/infrastructure/controller/pokemon/pokemon.controller';
import { Responses } from './app/infrastructure/responses/responses';
import commonConfig from './config/common.config';
import { HttpExceptionFilter } from './filter/http-exception-filter';

@Module({
  imports: [ConfigModule.forRoot({ load: [commonConfig], isGlobal: true })],
  controllers: [PokemonController],
  providers: [
    ConfigService,
    ApiConfigService,
    PokemonService,
    {
      provide: INJECT_TOKEN_POKEMON,
      useClass: PokemonNodeFetchAdapter,
    },
    Responses,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
