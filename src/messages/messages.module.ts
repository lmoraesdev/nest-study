import { Module } from '@nestjs/common';
import { messagesController } from './messages.controller';
import { messagesService } from './messages.service';

@Module({
  controllers: [messagesController],
  providers: [messagesService],
})
export class messagesModule {}
