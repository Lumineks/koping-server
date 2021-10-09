import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { PagesController } from './pages.controller';
import { PagesService } from './pages.service';
import { Page, PageSchema } from './entities/pages.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
  ],
  controllers: [PagesController],
  providers: [PagesService],
})
export class PagesModule {}
