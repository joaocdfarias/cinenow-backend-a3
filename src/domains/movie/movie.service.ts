import { Injectable } from '@nestjs/common';
import { MovieRepository } from './repositories/movie.repository';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';
import { SupabaseService } from '../../infra/supabase/supabase.service';

@Injectable()
export class MovieService {
  constructor(
    private repository: MovieRepository,
    private readonly supabaseService: SupabaseService,
  ) {}

  async create(movie: CreateMovieDto) {
    return await this.repository.create(movie);
  }

  async findById(id: number) {
    return await this.repository.findById(id);
  }

  async findAll() {
    return await this.repository.findAll();
  }

  async update(id: number, movie: UpdateMovieDto) {
    return await this.repository.update(id, movie);
  }

  async delete(id: number) {
    await this.repository.delete(id);
  }

  async upload(file: Express.Multer.File) {
    return await this.supabaseService.uploadFile(file);
  }
}
