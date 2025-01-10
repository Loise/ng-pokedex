import { Component, inject } from '@angular/core';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SortByDate } from '../sort-by-date.pipe';
import { SortByName } from '../sort-by-name.pipe';
import { ProductService } from '../product.service';
import { FormsModule } from '@angular/forms';
import { DynamicPipe } from '../dynamic-pipe.pipe';

@Component({
  selector: 'app-products-list',
  imports: [ProductCardComponent, DynamicPipe , FormsModule],
  template: `
    <h2>{{countFav}} favorites</h2>
    <select [(ngModel)]="sortSelected">
      @for (so of sortAvailable; track so.label) {
        <option [value]="$index">{{so.label}}</option>
      } 
    </select>
    sort selected {{sortAvailable[sortSelected].label}}
    @for (p of (products | dynamicPipe:{pipe: sortAvailable[sortSelected].pipe, options: sortAvailable[sortSelected].opts}); track p.id) {
      <app-product-card 
        [product]=p
        (addItemEvent)="addItem($event)"
      />
    }
  `,
  styles: [],
})
export class ProductsListComponent {
  sortAvailable = [
    {
      label: 'A-Z',
      pipe: SortByName,
      opts: [true]
    },
    {
      label: 'Z-A',
      pipe: SortByName,
      opts: [false]
    },
    {
      label: '+ recent',
      pipe: SortByDate,
      opts: [true]
    },
    {
      label: '+ ancien',
      pipe: SortByDate,
      opts: [false]
    }
  ]
  sortSelected = 0;
  countFav = 0;
  productService = inject(ProductService);
  products = this.productService.getProducts();

  addItem(item: number) {
    this.countFav += item;
  }
}
