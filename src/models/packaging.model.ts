import { PriceBreak } from './priceBreak.model';

export type SupplierName = 'Arrow' | 'TTI';

export class Packaging {
  type: string; // package type (bulk, reel, cut-tape, unspecified, etc)
  minimumOrderQuantity: number; // minimum quantity required to purchase from this package
  quantityAvailable: number; // available stock for this package
  unitPrice: number; // unit price for this package
  supplier: SupplierName; // name of supplier
  priceBreaks: PriceBreak[]; // collection of pricing tiers for this package
  manufacturerLeadTime?: string; // lead time in days
}
