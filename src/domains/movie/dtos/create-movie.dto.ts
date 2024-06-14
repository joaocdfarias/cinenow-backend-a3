import { IsDateString, IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  @IsNotEmpty()
  readonly title: string;

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
