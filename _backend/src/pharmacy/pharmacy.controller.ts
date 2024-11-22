import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { PharmacyService } from './pharmacy.service';
import { Pharmacy } from './entities/pharmacy.entity';

@ApiTags('Pharmacies') 
@Controller('pharmacies')
export class PharmacyController {
  constructor(private readonly pharmacyService: PharmacyService) {}

  @Get()
  @ApiOperation({ summary: 'Retrieve a list of all pharmacies' })  // Describe the operation
  @ApiResponse({
    status: 200,
    description: 'The list of pharmacies was successfully retrieved.',
    type: [Pharmacy],
  })
  findAllPharmacies() {
    return this.pharmacyService.findAllPharmacies(); 
  }
}
