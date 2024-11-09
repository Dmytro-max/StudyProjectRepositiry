import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiConsumes, ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';
import { FileInterceptor } from '@nestjs/platform-express';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  @Post()
  @ApiOperation({ summary: 'Create new product' })
  @ApiResponse({ status: 201, description: 'The product has been successfully created.', type: Product })
  @ApiResponse({ status: 400, description: 'Bad Request.' }) // You can specify more error responses if needed
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(FileInterceptor('cover'))
  create(@Body() createProductDto: CreateProductDto,
    @UploadedFile() cover: Express.Multer.File): Promise<Product> {
    if (createProductDto.cover) {
      cover = createProductDto.cover;
      delete createProductDto.cover;
    }
    createProductDto.price = Number(createProductDto.price)
    createProductDto.available = Boolean(createProductDto.available)
    return this.productService.create(createProductDto, cover);
  }

  @Get()
  @ApiOperation({ summary: 'Retrieve all products' })
  @ApiResponse({
    status: 200,
    description: 'List of all products',
    type: [Product]
  })
  findAll(): Promise<Product[]> {
    return this.productService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a product by its ID' })
  @ApiParam({
    name: 'id',
    required: true,
    description: 'The unique identifier of the product',
    type: String,
  })
  @ApiResponse({
    status: 200,
    description: 'The product details',
    type: Product,
  })
  @ApiResponse({
    status: 404,
    description: 'Product not found',
  })
  findOne(@Param('id') id: string) {
    return this.productService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }
}
