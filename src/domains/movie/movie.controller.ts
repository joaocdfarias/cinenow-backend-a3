import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dtos/create-movie.dto';
import { UpdateMovieDto } from './dtos/update-movie.dto';

@Controller('/movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async create(@Body() createMovieDto: CreateMovieDto) {
    return await this.movieService.create(createMovieDto);
  }

  @Get(':id')
  async findById(@Param('id') id: number) {
    return await this.movieService.findById(id);
  }

  @Get()
  async findAll() {
    return await this.movieService.findAll();
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateMovieDto: UpdateMovieDto,
  ) {
    return await this.movieService.update(id, updateMovieDto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    await this.movieService.delete(id);
    return {
      message: `Movie with id ${id} was deleted successfully`,
    };
  }

  @Post('/upload')
  @UseInterceptors(FileInterceptor('file'))
  async upload(@UploadedFile() file: Express.Multer.File) {
    return await this.movieService.upload(file);
  }
}
