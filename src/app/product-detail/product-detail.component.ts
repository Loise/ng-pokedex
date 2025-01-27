import { Component, Input, EventEmitter, Output, inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  imports: [],
  template: `
    <div>
    @if (product) {
     <h1>{{product.name}}</h1>
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
    }
    @else {
      <p>No product here </p>
    }
    </div>
  `,
  styles: ``
})
export class ProductDetailComponent {
  product?: Product = { id: 0, name: '', isFavorite: false, createdDate: new Date() };
  @Output() addItemEvent = new EventEmitter<number>();
  productService = inject(ProductService)

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.product = this.productService.getProduct(parseInt(params['id']));
    })
  }

  switchFav() {
    if (this.product) {
      this.productService.switchFav(this.product);
      this.addItemEvent.emit(this.product.isFavorite ? 1 : -1);
    }
  }
}
