import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { GasLogsService } from './gas-logs.service';

@Controller('gas-logs')
export class GasLogsController {
  constructor(private readonly gasLogsService: GasLogsService) {}

  @Get()
  getAll() {
    return this.gasLogsService.getAll();
  }

  @Post()
  create(@Body() logData: any) {
    return this.gasLogsService.create(logData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() logData: any) {
    return this.gasLogsService.update(id, logData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.gasLogsService.delete(id);
  }
}
