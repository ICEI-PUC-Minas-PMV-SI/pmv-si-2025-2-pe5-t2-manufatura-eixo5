import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsPositive, Max, MaxLength, MinLength } from "class-validator"

export class UpdateProductDto {
  @ApiPropertyOptional({ example: "Computador" })
  @MaxLength(255)
  @MinLength(5)
  name: string;

  @ApiPropertyOptional({ example: "Lorem ipsum dolor sit ammet" })
  @MaxLength(320)
  @MinLength(5)
  description: string;

  @ApiPropertyOptional({ example: 1200.00 })
  @Max(999)
  @IsPositive()
  price: number;
}
