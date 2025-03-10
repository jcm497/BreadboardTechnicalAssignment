export class PriceBreak {
  breakQuantity: number; // minimum quantity in order to reach pricing tier
  unitPrice: number; // price per unit at this tier
  totalPrice: number; // breakQuantity * unitPrice
}
