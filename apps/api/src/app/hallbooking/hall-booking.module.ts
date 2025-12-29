import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // Import Mongoose
import { HallBookingService } from './hall-booking.service';
import { HallBookingController } from './hall-booking.controller';
import { HallBooking, HallSchema } from '../entities/hall-booking.entity'; // Import your new schema

@Module({
  imports: [
    // Register the Mongoose model within this feature module
    MongooseModule.forFeature([{ name: HallBooking.name, schema: HallSchema }]),
  ],
  controllers: [HallBookingController],
  providers: [HallBookingService],
})
export class HallBookingModule {}
