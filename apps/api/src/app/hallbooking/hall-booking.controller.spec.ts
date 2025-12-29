import { Test, TestingModule } from '@nestjs/testing';
import { HallBookingController } from './hall-booking.controller';
import { HallBookingService } from './hall-booking.service';

describe('HallBookingController', () => {
  let controller: HallBookingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HallBookingController],
      providers: [HallBookingService],
    }).compile();

    controller = module.get<HallBookingController>(HallBookingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
