import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CorrespondenceService } from './correspondence.service';

@Controller('correspondence')
export class CorrespondenceController {
  constructor(private readonly correspondenceService: CorrespondenceService) {}

  @Get()
  getAll() {
    return this.correspondenceService.getAllCorrespondence();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.correspondenceService.getCorrespondenceById(id);
  }

  @Post()
  create(@Body() correspondenceData: any) {
    return this.correspondenceService.createCorrespondence(correspondenceData);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() correspondenceData: any) {
    return this.correspondenceService.updateCorrespondence(id, correspondenceData);
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return this.correspondenceService.deleteCorrespondence(id);
  }
}
