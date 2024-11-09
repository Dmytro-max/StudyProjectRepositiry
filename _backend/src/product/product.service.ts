import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DatabaseService } from 'src/database/database.service';
import { Product } from './entities/product.entity';
import { MinioClientService } from 'src/minio-client/minio-client.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private dbService: DatabaseService, private minioClientService: MinioClientService) {

  }
  async create(createProductDto: CreateProductDto, coverImage: Express.Multer.File): Promise<Product> {
    const product = new Product()
    product.available = createProductDto.available;
    product.description = createProductDto.description;
    product.name = createProductDto.name;
    product.price = createProductDto.price;

    if (coverImage) {
      const fileName = await this.minioClientService.uploadFile(coverImage)
      const imageUrl = await this.minioClientService.getFileUrl(fileName);
      product.coverImageUrl = imageUrl
    }
    const newProduct = await this.dbService.product.create({
      data: {
        ...product
      }
    })

    return newProduct;
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
