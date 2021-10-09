import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Page, PageDocument } from './entities/pages.entity';

@Injectable()
export class PagesService {
  constructor(@InjectModel(Page.name) private PageModel: Model<PageDocument>) {}
}
