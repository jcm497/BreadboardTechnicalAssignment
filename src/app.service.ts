import { Injectable } from '@nestjs/common';
import { AggregatedPart } from './models/aggregatedPart.model';
import axios from 'axios';

@Injectable()
export class AppService {
  private mockSuppliers = [
    {
      name: 'Arrow',
      url: 'https://backend-takehome.s3.us-east-1.amazonaws.com/myarrow.json',
    },
    {
      name: 'TTI',
      url: 'https://backend-takehome.s3.us-east-1.amazonaws.com/tti.json',
    },
  ];

  async fetchParts(query: string): Promise<AggregatedPart | null> {
    if (query !== '0510210200') {
      return null;
    }

    this.mockSuppliers.forEach(async (supplier) => {
      try {
        const response = await axios.get(supplier.url);
        return this.transformSupplierResponse(response.data, supplier.name);
      } catch (error) {
        console.error(`Error fetching data from ${supplier.name}: ${error}`);
      }
    });
  }
  
  transformSupplierResponse(data: any, name: string): void | PromiseLike<void> {
    throw new Error('Method not implemented.');
  }
}
