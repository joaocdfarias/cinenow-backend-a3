import { Module } from '@nestjs/common';
import { MovieModule } from './domains/movie/movie.module';

@Module({
  imports: [MovieModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
