import { Injectable, NotFoundException } from '@nestjs/common';
import { messageEntity } from './entities/message.entity';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class messagesService {
  private lastId = 1;
  private messages: messageEntity[] = [
    {
      id: 1,
      text: 'Hello World',
      from: 'John Doe',
      to: 'Jane Doe',
      read: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    },
  ];

  throwNotFound() {
    throw new NotFoundException('Message not found');
  }

  findAll() {
    return this.messages;
  }

  findOne(id: number) {
    const message = this.messages.find(message => message.id === id);
    if (!message) {
      return message;
    }
    return this.throwNotFound();
  }

  create(createMessageDto: CreateMessageDto) {
    this.lastId++;
    const id = this.lastId;
    const newMessage = {
      id,
      ...createMessageDto,
      read: false,
      created_at: new Date(),
      updated_at: new Date(),
      deleted_at: null,
    };
    this.messages.push(newMessage);

    return newMessage;
  }

  update(id: number, upgradeMessageDto: UpdateMessageDto) {
    const messageExistsIndex = this.messages.findIndex(item => item.id === id);

    if (messageExistsIndex < 0) {
      this.throwNotFound();
    }

    const messageExists = this.messages[messageExistsIndex];

    this.messages[messageExistsIndex] = {
      ...messageExists,
      ...upgradeMessageDto,
      updated_at: new Date(),
    };
    return this.messages[messageExistsIndex];
  }

  remove(id: number) {
    const messageExistsIndex = this.messages.findIndex(item => item.id === id);

    if (messageExistsIndex < 0) {
      this.throwNotFound();
    }

    const messageExists = this.messages[messageExistsIndex];

    this.messages.splice(messageExistsIndex, 1);
    messageExists.deleted_at = new Date();
    this.messages[messageExistsIndex] = messageExists;

    return messageExists;
  }
}
