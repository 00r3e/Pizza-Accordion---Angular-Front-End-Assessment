export interface Size {
  sizeId: number;
  name: string;
}

export interface Price {
  itemId: number;
  sizeId: number;
  price: number;
  enabled: boolean;
  previousPrice: number;
}

export interface Item {
  itemId: number;
  name: string;
}