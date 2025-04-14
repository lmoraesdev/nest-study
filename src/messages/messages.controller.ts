import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('messages')
export class messagesController {
  @Get()
  findAll() {
    return 'This action returns all recados';
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action returns a #${id} recado`;
  }

  @Post()
  create(@Body() body: any) {
    return body;
  }
}
