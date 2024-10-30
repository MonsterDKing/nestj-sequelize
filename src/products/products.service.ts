import { Inject, Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {

  constructor(
    @Inject('PRODUCTS_REPOSITORY')
    private userRepository: typeof Product
  ) {}

  async create(createProductDto: CreateProductDto) {
    return await this.userRepository.create({
      name: createProductDto.name,
      description: createProductDto.description,
      price: createProductDto.price,
      stock: createProductDto.stock
    })
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: number) {
    return this.userRepository.findByPk(id);
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.userRepository.update(updateProductDto, {
      where: {
        id
      }
    });
  }

  remove(id: number) {
    return this.userRepository.destroy({
      where: {
        id
      }
    });
  }
}
