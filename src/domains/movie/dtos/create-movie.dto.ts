import { IsDateString, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsString()
  @IsNotEmpty()
  readonly directorName: string;

  @IsString()
  @IsNotEmpty()
  readonly parentalRating: string;

  @IsString()
  @IsNotEmpty()
  readonly duration: string;

  @IsString()
  @IsNotEmpty()
  readonly synopsis: string;

  @IsUrl()
  @IsNotEmpty()
  readonly posterUrl: string;

  @IsDateString()
  @IsNotEmpty()
  readonly startDate: Date;

  @IsDateString()
  @IsNotEmpty()
  readonly endDate: Date;
}
