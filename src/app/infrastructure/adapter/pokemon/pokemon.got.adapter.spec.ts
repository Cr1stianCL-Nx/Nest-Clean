import { Test, TestingModule } from '@nestjs/testing';
import { PokemonGotAdapter } from './pokemon.got.adapter';

describe('PokemonGotAdapter', () => {
  let service: PokemonGotAdapter;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PokemonGotAdapter],
    }).compile();

    service = module.get<PokemonGotAdapter>(PokemonGotAdapter);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
