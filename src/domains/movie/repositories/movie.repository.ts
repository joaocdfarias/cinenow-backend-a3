import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../infra/database/prisma/prisma.service';
import { CreateMovieDto } from '../dtos/create-movie.dto';
import { UpdateMovieDto } from '../dtos/update-movie.dto';

@Injectable()
export class MovieRepository {
  constructor(private prisma: PrismaService) {}

  async create(movie: CreateMovieDto) {
    return await this.prisma.movie.create({
      data: movie,
    });
  }

  async findById(id: number) {
    return await this.prisma.movie.findUnique({
      where: {
        id: Number(id),
      },
    });
  }

  async findAll() {
    return await this.prisma.movie.findMany();
  }

  async update(id: number, movie: UpdateMovieDto) {
    return await this.prisma.movie.update({
      where: {
        id: Number(id),
      },
      data: {
        ...movie,
      },
    });
  }

  async delete(id: number) {
    await this.prisma.movie.delete({
      where: {
        id: Number(id),
      },
    });
  }
}
