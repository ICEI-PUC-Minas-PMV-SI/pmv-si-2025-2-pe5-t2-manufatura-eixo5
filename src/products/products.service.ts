import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from "@nestjs/typeorm"

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepo: Repository<Product>
  ) {}

  async create(createProductDto: CreateProductDto) {
    const product = new Product(createProductDto)
    await this.productRepo.save(product)
    return product
  }

  async findAll() {
    const productList = await this.productRepo.find({ where: {} })
    return productList
  }

  async findOne(id: string) {
    return await this.productRepo.findOneBy({ id })
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    await this.productRepo.update({ id }, updateProductDto)
  }

  async remove(id: string) {
    await this.productRepo
      .createQueryBuilder()
      .delete()
      .from(Product)
      .where({ id })
      .execute()
  }
}
