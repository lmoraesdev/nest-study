import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { messagesModule } from 'src/messages/messages.module';

@Module({
  imports: [messagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
