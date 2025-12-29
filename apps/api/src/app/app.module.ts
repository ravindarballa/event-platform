import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose'; // 1. Add this import
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HallBookingModule } from './hallbooking/hall-booking.module';
import { PhotographyModule } from './photography/photography.module';

@Module({
  imports: [
    // 2. Add the connection string (adjust 'event-platform' to your desired DB name)
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/event-platform'),
    HallBookingModule, 
    PhotographyModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
