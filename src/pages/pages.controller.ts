import { Controller, Get, Render } from '@nestjs/common';
import { PagesService } from './pages.service';

@Controller('pages')
export class PagesController {
  constructor(private pagesService: PagesService) { }
  
  @Get()
  @Render('index')
  async getIndexPage() {
    const pages = await this.pagesService.findAll();
    console.log(pages);
    const pageTitle = pages[0].pageTitle;
    return { message: pageTitle };
  }
}
