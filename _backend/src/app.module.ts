import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductModule } from './product/product.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config'
import { MinioClientModule } from './minio-client/minio-client.module';
import { PharmacyModule } from './pharmacy/pharmacy.module';

@Module({
  imports: [DatabaseModule, ProductModule, AuthModule, MinioClientModule,
    ConfigModule.forRoot(),
    PharmacyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
