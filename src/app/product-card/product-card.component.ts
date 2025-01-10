import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [DatePipe],
  template: `
    <div>
      <h1>{{product.name}}</h1>
      <p>{{product.createdDate | date: 'mediumDate':'':'fr'}}</p>
      @if (product.isFavorite) {
        <span>
          <b>Favorite product</b>
          <button (click)="switchFav()">Do fav</button>
        </span>
      } @else {
        <span>
          Simple product <button (click)="switchFav()">Do fav</button>
        </span>
      }
      <button (click)="navigateToProduct(product.id)">Voir le produit</button>
    </div>
  `,
  styles: ``
})
export class ProductCardComponent {
  @Input({required:true}) product: Product = { id: 0, name: '', isFavorite: false, createdDate: new Date() };
  @Output() addItemEvent = new EventEmitter<number>();
  productService = inject(ProductService)

  switchFav() {
    this.productService.switchFav(this.product);
    this.addItemEvent.emit(this.product.isFavorite ? 1 : -1);
  }

  private router = inject(Router);
  navigateToProduct(productId: number) {
    this.router.navigate(['/', productId]);
  }
}
