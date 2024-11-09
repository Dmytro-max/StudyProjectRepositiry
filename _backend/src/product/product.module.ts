import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MinioClientService } from 'src/minio-client/minio-client.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule],
  controllers: [ProductController],
  providers: [ProductService, MinioClientService],
})
export class ProductModule { }
