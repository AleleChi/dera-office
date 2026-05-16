import { Controller, Post, Body, Get, UseGuards, Request } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';

interface SaveOnboardingDto {
  companyName: string;
  industry: string;
  teamSize: string;
  roles: string[];
  useCases: string[];
  initialSubscription?: {
    name: string;
    cost: number;
    billingCycle: string;
  };
}

interface CompleteOnboardingDto {
  userId: string;
}

@Controller('onboarding')
export class OnboardingController {
  constructor(private readonly onboardingService: OnboardingService) {}

  @Post()
  async saveOnboarding(@Body() dto: SaveOnboardingDto & CompleteOnboardingDto) {
    return this.onboardingService.saveOnboarding(dto.userId, {
      companyName: dto.companyName,
      industry: dto.industry,
      teamSize: dto.teamSize,
      roles: dto.roles,
      useCases: dto.useCases,
      initialSubscription: dto.initialSubscription,
    });
  }

  @Post('complete')
  async completeOnboarding(@Body() dto: CompleteOnboardingDto) {
    return this.onboardingService.completeOnboarding(dto.userId);
  }
}