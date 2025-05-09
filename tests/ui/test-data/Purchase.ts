import { ProductState } from './ProductState';

export class PurchaseItem {
  constructor(public state: ProductState, public quantity: number = 1) {}

  get unitPrice(): number {
    return this.state.updatedPrice ?? this.state.product.price;
  }

  get subtotal(): number {
    return this.unitPrice * this.quantity;
  }

  get title(): string {
    return this.state.product.title;
  }
}

export class Purchase {
  private items: Map<string, PurchaseItem> = new Map();

  constructor(public taxRate: number = 0.08) {} // TODO: move to static file, default 8% tax

  addProduct(state: ProductState): void {
    const key = state.product.title;
    if (this.items.has(key)) {
      this.items.get(key)!.quantity += 1;
    } else {
      this.items.set(key, new PurchaseItem(state));
    }
  }

  removeProduct(state: ProductState): void {
    const key = state.product.title;
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

  getQuantityForProduct(state: ProductState): number {
    const key = state.product.title;
    return this.items.get(key)?.quantity ?? 0;
  }

  clear(): void {
    this.items.clear();
  }
}
