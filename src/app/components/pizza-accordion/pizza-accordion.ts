import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PizzaService } from '../../services/pizza-service';
import { Price } from '../../models/interfaces';

@Component({
  selector: 'app-pizza-accordion',
  imports: [FormsModule],
  templateUrl: './pizza-accordion.html',
  styleUrl: './pizza-accordion.css',
})
export class PizzaAccordion {
  
  pizzaService = inject(PizzaService);
  
  openSection: number | null = null;

  items = this.pizzaService.getItems();
  itemPrices = this.pizzaService.getPrices();
  itemSizes = this.pizzaService.getSizes();

  initialItemPrices: Price[] = [];

  ngOnInit() {
    this.initialItemPrices = structuredClone(this.itemPrices);

    const data = localStorage.getItem('prices');

    if (data) {
      this.itemPrices = JSON.parse(data);
    }
  }

  getPrice(itemId: number, sizeId: number): Price | undefined {
    return this.itemPrices.find(p => p.itemId === itemId && p.sizeId === sizeId);
  }

  toggleSize(itemId: number, sizeId: number) {
    const price = this.getPrice(itemId, sizeId);

    if (!price) return;

    if (price.enabled) {
      price.previousPrice = price.price;
      price.price = 0;
      price.enabled = false;
    } else {
      price.price = price.previousPrice;
      price.enabled = true;
    }
    this.saveToLocalStore();
  }

  toggle(section: number) {
    this.openSection = this.openSection === section ? null : section;
  }

  saveToLocalStore() {
    localStorage.setItem('prices', JSON.stringify(this.itemPrices));
  }

  hasChanges(itemId: number): boolean {
    const currentPrices = this.itemPrices.filter(p => p.itemId === itemId);

    const initialPrices = this.initialItemPrices.filter(p => p.itemId === itemId);

    return currentPrices.some((current, index) => {
      const initial = initialPrices[index];

      return current.price !== initial.price || current.enabled !== initial.enabled;
    });
  }

  undo(itemId: number) {
    const originalPrices = this.initialItemPrices.filter(p => p.itemId === itemId);

    originalPrices.forEach((original) => {
      const current = this.itemPrices.find(
        p => p.itemId === original.itemId && p.sizeId === original.sizeId,
      );

      if (current) {
        current.price = original.price;
        current.enabled = original.enabled;
      }
    });

    this.saveToLocalStore();
  }
}
