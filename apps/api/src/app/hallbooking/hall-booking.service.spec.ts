import { Test, TestingModule } from '@nestjs/testing';
import { HallBookingService } from './hall-booking.service';

describe('HallBookingService', () => {
  let service: HallBookingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HallBookingService],
    }).compile();

    service = module.get<HallBookingService>(HallBookingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
