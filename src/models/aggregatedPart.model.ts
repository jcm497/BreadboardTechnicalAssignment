import { Packaging } from './packaging.model';
import { SupplierName } from './packaging.model';

export class AggregatedPart {
  name: string; // part name
  description: string; // part description
  totalStock: number; // aggregate of total quantity free on hand (foh)/ available
  manufacturerLeadTime: number; // shortest lead time in days
  manufacturerName: string; // manufacturer for part
  packaging: Packaging[]; // collection of various packages available
  productDoc: string; // url to datasheet
  productUrl: string; // url to actual product on website
  productImageUrl: string; // url to product image
  specifications: JSON; // part name collection of specifications if any, [] if none
  sourceParts: SupplierName[]; // collection of suppliers from where data was aggregated
}
