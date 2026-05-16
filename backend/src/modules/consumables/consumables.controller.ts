import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ConsumablesService } from './consumables.service';

@Controller('consumables')
export class ConsumablesController {
  constructor(private readonly consumablesService: ConsumablesService) {}

  @Get()
  getAll() {
    return this.consumablesService.getAll();
  }

  @Post()
  create(@Body() consumableData: any) {
    return this.consumablesService.create(consumableData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() consumableData: any) {
    return this.consumablesService.update(id, consumableData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.consumablesService.delete(id);
  }
}
