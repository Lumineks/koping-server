import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PagesModule } from 'src/pages/pages.module';
import AppController from './app.controller';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://backend-mn:yCMG4WdEQj2IG52Z@koping.m0nzj.mongodb.net/kopingretryWrites=true&w=majority',
    ),
    PagesModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
