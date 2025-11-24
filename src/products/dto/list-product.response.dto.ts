import { ApiProperty } from "@nestjs/swagger";
import { CreateProductDto } from "./create-product.dto";
import { IsArray, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';

export class ListProductResponseDto {
  @ApiProperty({ type: CreateProductDto, isArray: true })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateProductDto)
  list: CreateProductDto[];
}
