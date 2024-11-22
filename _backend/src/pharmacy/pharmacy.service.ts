import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class PharmacyService {
    constructor(private dbService: DatabaseService) {

    }

    async findAllPharmacies() {
        return this.dbService.pharmacy.findMany()
    }
}


