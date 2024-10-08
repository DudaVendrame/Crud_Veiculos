import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { Vehicle } from './vehicle.entity';

@Controller('vehicles')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.vehicleService.findOne(id);
  }

  @Post()
  create(@Body() vehicle: Vehicle) {
    return this.vehicleService.create(vehicle);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() vehicle: Vehicle) {
    return this.vehicleService.update(id, vehicle);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.vehicleService.remove(id);
  }
}