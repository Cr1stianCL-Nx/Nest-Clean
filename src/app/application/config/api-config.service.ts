import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  get getPokemonEndPoint(): string {
    return this.configService.get('pokemon_endpoint') as string;
  }

  get getChannel(): string {
    return this.configService.get('channel') as string;
  }

  get getCountry(): string {
    return this.configService.get('country') as string;
  }
}
