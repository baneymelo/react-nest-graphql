import { Module } from '@nestjs/common';
import { CoreModule } from './core/core.module';
import { CharacterService } from './character/character.service';
import { CharacterResolver } from './character/character.resolver';

@Module({
  imports: [CoreModule],
  providers: [CharacterService, CharacterResolver],
})
export class AppModule {}
