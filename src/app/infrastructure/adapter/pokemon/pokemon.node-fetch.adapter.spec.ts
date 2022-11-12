import { Test, TestingModule } from '@nestjs/testing';
import { PokemonNodeFetchAdapter } from './pokemon.node-fetch.adapter';

describe('PokemonNodeFetchAdapter', () => {
  let service: PokemonNodeFetchAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonNodeFetchAdapter],
    }).compile();

    service = module.get<PokemonNodeFetchAdapter>(PokemonNodeFetchAdapter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
