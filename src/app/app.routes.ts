import {Routes} from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ContactComponent } from './contact/contact.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
export const routes: Routes = [
  {
    path: '',
    title: 'ProductList',
    component: ProductsListComponent,
  },
  {
    path: 'contact',
    title: 'Contact',
    component: ContactComponent
  },
  {
    path: 'profile-form',
    title: 'ProfileForm',
    component: ProfileFormComponent
  },
  {
    path: ':id',
    title: 'DetailProduct',
    component: ProductDetailComponent
  }
];
