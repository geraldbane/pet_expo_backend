import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetModule } from './pet/pet.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios/dist/http.module';
import { MulterModule } from '@nestjs/platform-express';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal: true,

    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'Images'),
      serveRoot: '/images',
      serveStaticOptions: {
        extensions: ['jpg', 'jpeg', 'png', 'gif'], 
      },
    }),
    MongooseModule.forRoot(process.env.DBURL),
    MulterModule.register({
  dest:"./Images",
    }),
    PetModule, HttpModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
