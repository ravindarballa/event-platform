import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { HallBookingService } from './hall-booking.service';
import { CreateHallBookingDto } from '../dto/create-hall-booking.dto';
import { UpdateHallBookingDto } from '../dto/update-hall-booking.dto';

@Controller('hall-booking')
export class HallBookingController {
  constructor(private readonly hallBookingService: HallBookingService) {}

  @Post()
  create(@Body() createHallBookingDto: CreateHallBookingDto) {
    return this.hallBookingService.create(createHallBookingDto);
  }

  @Get()
  findAll() {
    return this.hallBookingService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hallBookingService.findOne(id); // Changed +id to id
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: any) {
    return this.hallBookingService.update(id, updateDto); // Changed +id to id
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hallBookingService.remove(id); // Changed +id to id
  }
}
