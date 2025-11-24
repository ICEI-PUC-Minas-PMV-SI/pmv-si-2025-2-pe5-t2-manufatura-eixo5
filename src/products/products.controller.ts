import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiBody, ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { ListProductResponseDto } from './dto/list-product.response.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({
    summary: "Cria um novo produto",
    tags: ["Product"]
  })
  @ApiResponse({ status: 201, type: Product })
  @ApiBody({ type: CreateProductDto })
  async create(@Body() createProductDto: CreateProductDto) {
    return await this.productsService.create(createProductDto);
  }

  @Get()
  @ApiOperation({
    summary: "Lê todos os produtos existentes",
    tags: ["Product"]
  })
  @ApiResponse({ status: 200, type: ListProductResponseDto })
  async findAll() {
    const list = await this.productsService.findAll();
    return { list }
  }

  @Get(':id')
  @ApiOperation({
    summary: "Lê dados de um produto",
    tags: ["Product"]
  })
  @ApiResponse({ status: 200, type: Product })
  @ApiParam({
    name: "id",
    required: true
  })
  async findOne(@Param('id') id: string) {
    return await this.productsService.findOne(id);
  }

  @HttpCode(204)
  @Patch(':id')
  @ApiOperation({
    summary: "Atualiza dados de um produto",
    tags: ["Product"]
  })
  @ApiBody({ type: UpdateProductDto })
  @ApiResponse({ status: 204 })
  @ApiParam({
    name: "id",
    required: true
  })
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    await this.productsService.update(id, updateProductDto);
  }

  @HttpCode(204)
  @Delete(':id')
  @ApiOperation({
    summary: "Deleta um produto",
    tags: ["Product"]
  })
  @ApiResponse({ status: 204 })
  @ApiParam({
    name: "id",
    required: true
  })
  async remove(@Param('id') id: string) {
    await this.productsService.remove(id);
  }
}
