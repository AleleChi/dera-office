import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { CorrespondenceModule } from './modules/correspondence/correspondence.module';
import { SubscriptionsModule } from './modules/subscriptions/subscriptions.module';
import { PrinterModule } from './modules/printer/printer.module';
import { ConsumablesModule } from './modules/consumables/consumables.module';
import { GasLogsModule } from './modules/gas-logs/gas-logs.module';
import { OnboardingModule } from './modules/onboarding/onboarding.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    AuthModule,
    CorrespondenceModule,
    SubscriptionsModule,
    PrinterModule,
    ConsumablesModule,
    GasLogsModule,
    OnboardingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
