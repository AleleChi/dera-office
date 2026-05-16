import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get()
  getAll() {
    return this.subscriptionsService.getAll();
  }

  @Post()
  create(@Body() subscriptionData: any) {
    return this.subscriptionsService.create(subscriptionData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() subscriptionData: any) {
    return this.subscriptionsService.update(id, subscriptionData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.subscriptionsService.delete(id);
  }
}
