import { Product } from './Product';

export class PurchaseItem {
  constructor(public product: Product, public quantity: number = 1) {}

  get subtotal(): number {
    return this.product.price * this.quantity;
  }
}

export class Purchase {
  private items: Map<string, PurchaseItem> = new Map();

  constructor(public taxRate: number = 0.08) {} // TODO: move to static file, default 8% tax

  addProduct(product: Product): void {
    const key = product.title;
    if (this.items.has(key)) {
      this.items.get(key)!.quantity += 1;
    } else {
      this.items.set(key, new PurchaseItem(product));
    }
  }

  removeProduct(product: Product): void {
    const key = product.title;
    const item = this.items.get(key);
    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        this.items.delete(key);
      }
    }
  }

  get subtotal(): number {
    return Array.from(this.items.values()).reduce(
      (sum, item) => sum + item.subtotal,
      0
    );
  }

  get tax(): number {
    return this.subtotal * this.taxRate;
  }

  get total(): number {
    return this.subtotal + this.tax;
  }

  getPurchaseItems(): PurchaseItem[] {
    return Array.from(this.items.values());
  }

  getQuantityForProduct(product: Product) {
    const key = product.title;
    if (this.items.has(key)) {
      return this.items.get(key)?.quantity;
    }
    return 0;
  }

  clear() {
    this.items = new Map();
  }
}
