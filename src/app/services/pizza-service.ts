import { Injectable } from '@angular/core';
import { ITEMS, PRICES, SIZES } from '../data/pizza-data';

@Injectable({
  providedIn: 'root',
})
export class PizzaService {
  
   getItems() {
    return structuredClone(ITEMS);
  }

  getPrices() {
    return structuredClone(PRICES);
  }

  getSizes() {
    return structuredClone(SIZES);
  }
}
