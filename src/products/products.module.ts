import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { productsProvider } from './repository/products.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService,...productsProvider],
})
export class ProductsModule {}
