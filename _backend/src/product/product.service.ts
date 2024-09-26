import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DatabaseService } from 'src/database/database.service';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(private dbService: DatabaseService) {

  }
  async create(createProductDto: CreateProductDto): Promise<Product> {
    return this.dbService.product.create({
      data: createProductDto
    })
  }

  async findAll(): Promise<Product[]> {
    return this.dbService.product.findMany()
  }

  async findOne(id: string): Promise<Product> {
    return this.dbService.product.findUnique({
      where: {
        id,
      }
    })
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
