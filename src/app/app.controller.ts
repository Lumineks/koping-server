import { Body, Controller, Get, Header, Post, Render } from '@nestjs/common';

@Controller()
class AppController {
  @Get()
  @Render('index')
  index() {
    return { message: 'Hello world!' };
  }

  @Get('/products')
  products(@Body() body: string) {
    return { text: 'hey there' };
  }
}

export default AppController;
