import {
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateMessageDto {
  @IsString()
  @MinLength(5)
  @MaxLength(200)
  @IsNotEmpty()
  @IsOptional()
  readonly text: string;

  @IsString()
  @MinLength(5)
  @MaxLength(50)
  @IsNotEmpty()
  @IsOptional()
  readonly from: string;

  @IsString()
  @MinLength(5)
  @MaxLength(50)
  @IsNotEmpty()
  @IsOptional()
  readonly to: string;
}
