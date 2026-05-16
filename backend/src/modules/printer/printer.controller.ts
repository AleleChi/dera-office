import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { PrinterService } from './printer.service';

@Controller('printer')
export class PrinterController {
  constructor(private readonly printerService: PrinterService) {}

  @Get('logs')
  getLogs() {
    return this.printerService.getLogs();
  }

  @Post('logs')
  createLog(@Body() logData: any) {
    return this.printerService.createLog(logData);
  }

  @Put('logs/:id')
  updateLog(@Param('id') id: number, @Body() logData: any) {
    return this.printerService.updateLog(id, logData);
  }

  @Delete('logs/:id')
  deleteLog(@Param('id') id: number) {
    return this.printerService.deleteLog(id);
  }
}
