import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './products/entities/product.entity';

const {
  DB_HOST: host,
  DB_PORT: port,
  DB_USER: username,
  DB_PASSWORD: password,
  DB_NAME: database
} = process.env

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host, 
      port: Number(port),
      username, 
      password,
      database,
      entities: [Product],
      synchronize: true,
      autoLoadEntities: true,
    }),
    ProductsModule
  ],
})
export class AppModule {}
