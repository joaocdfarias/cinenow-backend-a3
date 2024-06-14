import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { MovieRepository } from './repositories/movie.repository';
import { PrismaModule } from '../../infra/database/prisma/prisma.module';
import { SupabaseModule } from '../../infra/supabase/supabase.module';

@Module({
  imports: [PrismaModule, SupabaseModule],
  controllers: [MovieController],
  providers: [MovieService, MovieRepository],
})
export class MovieModule {}
