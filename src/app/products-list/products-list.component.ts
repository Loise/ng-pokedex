import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SortByDate } from '../sort-by-date.pipe';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent, SortByDate, FormsModule],
  template: `
    <h2>{{countFav}} favorites</h2>
    <select [(ngModel)]="sortSelected">
      @for (so of sortOpt; track so) {
        <option [value]="$index">{{so}}</option>
      } 
    </select>
    sort selected {{sortOpt[sortSelected]}}
    @for (p of (products | sortByDate:true); track p.id) {
      <app-product-card 
        [product]=p
        (addItemEvent)="addItem($event)"
      />
    }
  `,
  styles: [],
})
export class ProductsListComponent {
  sortOpt = ['A-Z', 'Z-A', '+ recent', '+ ancien'];
  sortSelected = 0;
  countFav = 0;
  productService = inject(ProductService);
  products = this.productService.getProducts();

  addItem(item: number) {
    this.countFav += item;
  }
}
