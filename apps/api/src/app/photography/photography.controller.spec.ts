import { Test, TestingModule } from '@nestjs/testing';
import { PhotographyController } from './photography.controller';
import { PhotographyService } from './photography.service';

describe('PhotographyController', () => {
  let controller: PhotographyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhotographyController],
      providers: [PhotographyService],
    }).compile();

    controller = module.get<PhotographyController>(PhotographyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
