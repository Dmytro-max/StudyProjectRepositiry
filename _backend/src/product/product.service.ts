import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { DatabaseService } from 'src/database/database.service';
import { Product } from './entities/product.entity';
import { MinioClientService } from 'src/minio-client/minio-client.service';
import { ProductCategory } from './entities/product-category.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private dbService: DatabaseService, private minioClientService: MinioClientService) {

  }
  async create(createProductDto: CreateProductDto, coverImage: Express.Multer.File): Promise<Product> {
    const productData: Prisma.ProductCreateInput = {
      name: createProductDto.name,
      description: createProductDto.description,
      tradeMark: createProductDto.tradeMark,
      quantityInPackage: createProductDto.quantityInPackage,
      termsOfSale: createProductDto.termsOfSale,
      countryOfOrigin: createProductDto.countryOfOrigin,
      releaseForm: createProductDto.releaseForm,
      category: {
        connect: { id: createProductDto.categoryId } // Use connect to associate the existing category by ID
      }
    };

    if (coverImage) {
      const fileName = await this.minioClientService.uploadFile(coverImage)
      const imageUrl = await this.minioClientService.getFileUrl(fileName);
      productData.coverImageUrl = imageUrl
    }
    const newProduct = await this.dbService.product.create({
      data: {
        ...productData
      }
    })

    return newProduct;
  }

  async findAll(): Promise<Product[]> {
    return this.dbService.product.findMany({
      include: {
        category: true
      }
    })
  }

  async findOne(id: string): Promise<Product> {
    return this.dbService.product.findUnique({
      where: {
        id,
      }
    })
  }

  async findAllProductCategories(): Promise<ProductCategory[]> {
    return this.dbService.productCategory.findMany()
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
