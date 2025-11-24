import { ApiProperty } from "@nestjs/swagger";
import { IsPositive, Max, MaxLength, MinLength } from "class-validator"

export class CreateProductDto {
  @ApiProperty({ example: "Computador" })
  @MaxLength(255)
  @MinLength(5)
  name: string;

  @ApiProperty({ example: "Lorem ipsum dolor sit ammet" })
  @MaxLength(320)
  @MinLength(5)
  description: string;

  @ApiProperty({ example: 1200.00 })
  @Max(999999)
  @IsPositive()
  price: number;
}
