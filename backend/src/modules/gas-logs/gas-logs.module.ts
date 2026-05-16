import { Module } from '@nestjs/common';
import { GasLogsController } from './gas-logs.controller';
import { GasLogsService } from './gas-logs.service';

@Module({
  controllers: [GasLogsController],
  providers: [GasLogsService],
})
export class GasLogsModule {}
