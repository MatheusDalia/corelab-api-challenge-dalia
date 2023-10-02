import {
  IsString,
  IsBoolean,
  IsOptional,
  IsHexColor,
  Length,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UUID } from 'crypto';

export class UpdateTodosDto {
  readonly id: UUID;
  @ApiProperty({ example: 'My Todo Title' })
  @IsString()
  @Length(1, 255)
  readonly title: string;

  @ApiProperty({ example: 'This is the text of my todo item.' })
  @IsString()
  @MaxLength(500)
  readonly text: string;

  @ApiProperty({ example: true })
  @IsBoolean()
  readonly favorite: boolean;

  @ApiProperty({ example: '#FF5733', required: false })
  @IsHexColor()
  @IsOptional()
  readonly color: string;
}
