import { Body, Controller, Get, Header, Post } from '@nestjs/common';

@Controller()
class AppController {
  @Get()
  index() {
    return 'hello from nestjs';
  }

  @Get('/products')
  products(@Body() body: string) {
    return {text: "hey there"};
  }
}

export default AppController;
