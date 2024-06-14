import { IsDateString, IsOptional, IsString, IsUrl } from 'class-validator';

export class UpdateMovieDto {
  @IsString()
  @IsOptional()
  readonly title: string;

  @IsUrl()
  @IsOptional()
  readonly posterUrl: string;

  @IsDateString()
  @IsOptional()
  readonly startDate: Date;

  @IsDateString()
  @IsOptional()
  readonly endDate: Date;
}
